'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
};

// Tabs Root
interface TabsProps {
  defaultValue: string;
  children: ReactNode;
  className?: string;
  onChange?: (value: string) => void;
}

export const Tabs = ({ defaultValue, children, className = '', onChange }: TabsProps) => {
  const [activeTab, setActiveTabState] = useState(defaultValue);

  const setActiveTab = (id: string) => {
    setActiveTabState(id);
    onChange?.(id);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

// Tabs List
interface TabsListProps {
  children: ReactNode;
  className?: string;
}

export const TabsList = ({ children, className = '' }: TabsListProps) => {
  return (
    <div
      className={`
        flex flex-wrap gap-2
        border-b border-alfa-gray-700
        ${className}
      `}
      role="tablist"
    >
      {children}
    </div>
  );
};

// Tab Trigger
interface TabTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export const TabTrigger = ({ value, children, className = '' }: TabTriggerProps) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveTab(value)}
      className={`
        px-4 py-3
        font-medium text-sm md:text-base
        border-b-2 -mb-px
        transition-colors duration-200
        ${
          isActive
            ? 'border-alfa-red text-alfa-red'
            : 'border-transparent text-alfa-gray-400 hover:text-white hover:border-alfa-gray-600'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// Tab Content
interface TabContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export const TabContent = ({ value, children, className = '' }: TabContentProps) => {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <div
      role="tabpanel"
      className={`py-6 animate-in fade-in duration-200 ${className}`}
    >
      {children}
    </div>
  );
};
