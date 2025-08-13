import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SimpleSidebar from './SimpleSidebar';
import Header from './Header';

interface LayoutWithRightSidebarProps {
  children: React.ReactNode;
}

const LayoutWithRightSidebar: React.FC<LayoutWithRightSidebarProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarIconsOnly, setSidebarIconsOnly] = useState(false);
  const [rightSidebarVisible, setRightSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    if (sidebarCollapsed) {
      setSidebarCollapsed(false);
      setSidebarIconsOnly(true);
    } else if (sidebarIconsOnly) {
      setSidebarIconsOnly(false);
    } else {
      setSidebarIconsOnly(true);
    }
  };

  const toggleSidebarVisibility = () => {
    if (sidebarCollapsed) {
      setSidebarCollapsed(false);
      setSidebarIconsOnly(true);
    } else {
      setSidebarCollapsed(true);
      setSidebarIconsOnly(false);
    }
  };

  const handleRightSidebarClose = () => {
    setRightSidebarVisible(false);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header spans full width */}
      <Header 
        onToggleSidebar={toggleSidebarVisibility} 
        sidebarCollapsed={sidebarCollapsed}
      />
      
      {/* Main content area with left sidebar, content, and right sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed sidebar toggle button when sidebar is completely hidden */}
        {sidebarCollapsed && (
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
            <button
              onClick={toggleSidebarVisibility}
              className="bg-[#F5F5F6] border border-[#EAEAEB] p-2 rounded-r-lg shadow-md hover:bg-gray-100 transition-colors"
              title="Show sidebar"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
        
        {/* Left Sidebar */}
        <Sidebar 
          collapsed={sidebarCollapsed} 
          iconsOnly={sidebarIconsOnly}
          onToggle={toggleSidebar}
          onClose={toggleSidebarVisibility}
        />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

        {/* Right Sidebar */}
        {rightSidebarVisible && (
          <SimpleSidebar onToggle={handleRightSidebarClose} />
        )}
      </div>
    </div>
  );
};

export default LayoutWithRightSidebar;
