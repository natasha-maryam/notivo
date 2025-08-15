import React, { useState } from 'react';
import ProfileTab from '../components/Settings/ProfileTab';
import NotificationsTab from '../components/Settings/NotificationsTab';
import DataManagementTab from '../components/Settings/DataManagementTab';
import PlansAndBillingTab from '../components/Settings/PlansAndBillingTab';
import AISettingsTab from '../components/Settings/AISettingsTab';
import PeopleManagementTab from '../components/Settings/PeopleManagementTab';

// Import SVG icons
import User from '../assets/svgs/User.svg';
import Bell from '../assets/svgs/bell.svg';
import Settings02 from '../assets/svgs/settings-02.svg';
import Team from '../assets/svgs/team.svg';

interface SettingsProps {
  onToggleSidebar?: () => void;
  sidebarCollapsed?: boolean;
}

const Settings: React.FC<SettingsProps> = ({ 
  onToggleSidebar,
  sidebarCollapsed = false 
}) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Check if screen is mobile/tablet
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const tabs = [
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: User,
      component: ProfileTab
    },
    { 
      id: 'notifications', 
      label: 'Notifications', 
      icon: Bell,
      component: NotificationsTab
    },
    { 
      id: 'datamanagement', 
      label: 'Data management', 
      icon: Settings02,
      component: DataManagementTab
    },
    { 
      id: 'plans', 
      label: 'Plans & Billing', 
      icon: Settings02,
      component: PlansAndBillingTab
    },
    { 
      id: 'aisettings', 
      label: 'AI Settings', 
      icon: Settings02,
      component: AISettingsTab
    },
    { 
      id: 'people', 
      label: 'People management', 
      icon: Team,
      component: PeopleManagementTab
    },
  ];

  const renderTabContent = () => {
    const activeTabData = tabs.find(tab => tab.id === activeTab);
    if (!activeTabData) return null;
    
    const TabComponent = activeTabData.component;
    return <TabComponent />;
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setShowDropdown(false);
  };

  return (
    <div className="space-y-4 font-poppins px-6 py-3 overflow-y-scroll bg-white">
      <div>
        <h1 className="text-[18px] font-medium text-[#333333]">Settings</h1>
      </div>

      <div className="overflow-hidden">
        {/* Mobile/Tablet Dropdown */}
        {isMobile ? (
          <div className="relative mb-6">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center justify-between px-4 py-3 border border-[#EDEDED] rounded-lg bg-[#F5F5F6] focus:border-[#8DE87F] focus:outline-none"
            >
              <div className="flex items-center space-x-3">
                <img src={activeTabData?.icon} alt="" className="w-5 h-5" />
                <span className="text-[16px] font-medium">{activeTabData?.label}</span>
              </div>
              <svg
                className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#EDEDED] rounded-lg shadow-lg z-10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                      activeTab === tab.id ? 'bg-gray-50 text-black font-medium' : 'text-gray-700'
                    }`}
                  >
                    <img src={tab.icon} alt="" className="w-5 h-5" />
                    <span className="text-[16px]">{tab.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Desktop Horizontal Tabs */
          <div>
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-0 px-1 border-b-2 text-[16px] transition-colors ${
                    activeTab === tab.id
                      ? "border-black text-black font-semibold"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-normal"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Content Area */}
        <div className="mt-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
