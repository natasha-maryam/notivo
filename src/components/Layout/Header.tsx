import React, { useState, useRef, useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Search from "../../assets/svgs/search-refraction.svg";
import Tag from "../../assets/svgs/tag.svg";
import Refresh from "../../assets/svgs/refresh-cw.svg";
import Bell from "../../assets/svgs/bell.svg";
import Share from "../../assets/svgs/share-2.svg";
import Maximize from "../../assets/svgs/maximize-2.svg";
import Profile from "../../assets/svgs/Label.svg"

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, sidebarCollapsed }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <header className="bg-[#F5F5F6] px-6 border-b border-[#EAEAEB] w-full flex-shrink-0 h-14 flex items-center">
      <div className="flex items-center justify-between w-full">
        {/* Left Section - Logo and Toggle */}
        <div className="flex items-center space-x-4">
          {/* Show toggle button on mobile */}
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 md:hidden"
          >
            <HiOutlineMenuAlt2 className="w-6 h-6" />
          </button>
          
          {/* Logo - always visible in header */}
          <img src="/logo.avif" alt="notivo logo" className="h-6" />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* Desktop View - Show all icons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="p-2 rounded-full bg-[#9AFB8B] hover:bg-[#9AFB8B] text-black">
              <BiPlus className="w-5 h-5" />
            </button>

            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
              <img src={Search} alt="Search" className="w-5 h-5" />
            </button>

            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
              <img src={Refresh} alt="Refresh" className="w-5 h-5" />
            </button>

            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
              <img src={Tag} alt="Tag" className="w-5 h-5" />
            </button>

            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
              <img src={Bell} alt="Bell" className="w-5 h-5" />
            </button>

            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
              <img src={Share} alt="Share" className="w-5 h-5" />
            </button>

            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
              <img src={Maximize} alt="Maximize" className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile View - Dropdown menu */}
          <div className="md:hidden relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            >
              <BsThreeDotsVertical className="w-5 h-5" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50">
                  <div className="p-1 rounded-full bg-[#9AFB8B]">
                    <BiPlus className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-sm text-gray-700">Add New</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50">
                  <img src={Search} alt="Search" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">Search</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50">
                  <img src={Refresh} alt="Refresh" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">Refresh</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50">
                  <img src={Tag} alt="Tag" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">Tags</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50">
                  <img src={Bell} alt="Bell" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">Notifications</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50">
                  <img src={Share} alt="Share" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">Share</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50">
                  <img src={Maximize} alt="Maximize" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">Maximize</span>
                </button>
              </div>
            )}
          </div>

          {/* Profile - Always visible */}
          <button>
            <img src={Profile} alt="Profile" className="w-[36px] h-[36px]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
