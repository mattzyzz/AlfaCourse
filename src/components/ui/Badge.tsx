import { HTMLAttributes, forwardRef } from 'react';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'info';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-alfa-gray-700 text-alfa-gray-200',
  primary: 'bg-alfa-red/10 text-alfa-red',
  success: 'bg-green-900/20 text-green-400',
  warning: 'bg-yellow-900/20 text-yellow-400',
  info: 'bg-blue-900/20 text-blue-400',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className = '', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center
          px-2.5 py-0.5
          text-xs font-medium
          rounded-full
          ${variantStyles[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

// Course Badge component
interface CourseBadgeProps {
  type: 'subscription' | 'new' | 'popular';
}

export const CourseBadge = ({ type }: CourseBadgeProps) => {
  const config = {
    subscription: { label: 'Входит в подписку', variant: 'primary' as const },
    new: { label: 'Новый', variant: 'success' as const },
    popular: { label: 'Популярный', variant: 'warning' as const },
  };

  const { label, variant } = config[type];

  return <Badge variant={variant}>{label}</Badge>;
};
