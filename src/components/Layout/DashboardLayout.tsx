import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isPeoplePage = location.pathname === '/people';
  const isTagsPage = location.pathname === '/tags';
  const isNotesPage = location.pathname === '/notes';
  const isSettingsPage = location.pathname === '/settings';
  const isCustomLayoutPage = isPeoplePage || isTagsPage || isNotesPage || isSettingsPage;
  
  // Initialize sidebar state based on screen size
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768; // Auto-collapse on mobile
    }
    return false;
  });
  const [sidebarIconsOnly, setSidebarIconsOnly] = useState(false);

  // Responsive sidebar logic
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 768;
      
      // Only auto-collapse when resizing to small screen, don't interfere with manual toggles
      if (isSmallScreen && !sidebarCollapsed) {
        setSidebarCollapsed(true);
        setSidebarIconsOnly(false);
      } else if (!isSmallScreen && sidebarCollapsed) {
        // Auto-expand when resizing to large screen only if it was auto-collapsed
        setSidebarCollapsed(false);
        setSidebarIconsOnly(false);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // No dependencies to avoid infinite loops

  const toggleSidebarVisibility = () => {
    if (sidebarCollapsed) {
      // Show sidebar
      setSidebarCollapsed(false);
      setSidebarIconsOnly(false); // Show full sidebar when opening
    } else {
      // Hide sidebar completely
      setSidebarCollapsed(true);
      setSidebarIconsOnly(false);
    }
  };

  const toggleSidebar = () => {
    if (sidebarCollapsed) {
      // If completely collapsed, show icons only
      setSidebarCollapsed(false);
      setSidebarIconsOnly(true);
    } else if (sidebarIconsOnly) {
      // If icons only, expand fully
      setSidebarIconsOnly(false);
    } else {
      // If fully expanded, go to icons only
      setSidebarIconsOnly(true);
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header spans full width */}
      <Header 
        onToggleSidebar={toggleSidebarVisibility} 
        sidebarCollapsed={sidebarCollapsed}
      />
      
      {/* Main content area with sidebar and content side by side */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed sidebar toggle button when sidebar is completely hidden */}
        {sidebarCollapsed && (
          <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 md:block">
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
        
        <Sidebar 
          collapsed={sidebarCollapsed} 
          iconsOnly={sidebarIconsOnly}
          onToggle={toggleSidebar}
          onClose={toggleSidebarVisibility}
          hideSimpleSidebar={isCustomLayoutPage}
        />
        
        <main className={`flex-1 overflow-hidden ${
          isCustomLayoutPage 
            ? '' 
            : `overflow-y-auto p-4 md:p-6 ${sidebarCollapsed ? 'md:ml-0' : ''}`
        }`}>
          {isCustomLayoutPage 
            ? React.cloneElement(children as React.ReactElement, {
                onToggleSidebar: toggleSidebarVisibility,
                sidebarCollapsed
              })
            : children
          }
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
