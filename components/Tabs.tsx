import React from 'react';
import { CheckIcon, LightbulbIcon, PackageIcon } from './Icons';

export type Tab = 'defining' | 'how' | 'packages';

interface TabsProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'defining', label: 'Defining Success', icon: CheckIcon },
    { id: 'how', label: 'How We Get There', icon: LightbulbIcon },
    { id: 'packages', label: 'Packages & Deliverables', icon: PackageIcon },
  ];

  return (
    <nav className="flex justify-center p-4">
      <div className="flex items-center space-x-2 bg-gray-100 p-1.5 rounded-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`flex items-center justify-center px-4 md:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                ${isActive
                  ? 'bg-white text-blue-600 border border-blue-200 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-200/70'
                }
              `}
              aria-current={isActive ? 'page' : undefined}
            >
              <tab.icon className={`mr-2 h-5 w-5 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Tabs;
