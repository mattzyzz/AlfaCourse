import { NextRequest, NextResponse } from 'next/server';
import { validateLead, LeadFormData } from '@/lib/validation';

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate data
    const validation = validateLead(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.error.flatten() },
        { status: 400 }
      );
    }

    const data: LeadFormData = validation.data;

    // Check honeypot (spam protection)
    if (data.honeypot) {
      // Silently accept but don't process (looks like success to bots)
      console.log('[SPAM] Honeypot triggered');
      return NextResponse.json({ success: true });
    }

    // Log the lead (in production, save to database)
    console.log('[LEAD] New submission:', {
      formType: data.formType,
      productKey: data.productKey,
      company: data.company,
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    // Send to webhook (if configured)
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            timestamp: new Date().toISOString(),
            source: 'alfa-b2b-landing',
          }),
        });
      } catch (webhookError) {
        console.error('[WEBHOOK] Failed to send:', webhookError);
        // Don't fail the request if webhook fails
      }
    }

    // Send email notification (if configured)
    const emailTo = process.env.EMAIL_TO;
    if (emailTo) {
      // In production, integrate with email service (Resend, SendGrid, etc.)
      console.log('[EMAIL] Would send notification to:', emailTo);
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
    });
  } catch (error) {
    console.error('[API] Error processing lead:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
}
