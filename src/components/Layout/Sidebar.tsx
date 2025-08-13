import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiChevronRight,
} from "react-icons/hi";
import SideBottom from "../../assets/images/sidebar-bottom.png";
import ArrowRight from "../../assets/svgs/arrow-right.svg";
import LeftIcon from "../../assets/svgs/chevron-left.svg";
import SimpleSidebar from "./SimpleSidebar";

import Search from "../../assets/svgs/side-search.svg"
import Notes from "../../assets/svgs/notes.svg"
import People from "../../assets/svgs/people.svg"
import Tags from "../../assets/svgs/side-tag.svg"
import Workspaces from "../../assets/svgs/workspace.svg"
import Settings from "../../assets/svgs/settings-02.svg"
import ActiveSearch from "../../assets/svgs/search-refraction.svg"
import ActiveNotes from "../../assets/svgs/active-notes.svg"
import ActivePeople from "../../assets/svgs/active-people.svg"
import ActiveTags from "../../assets/svgs/tag.svg"
import ActiveWorkspaces from "../../assets/svgs/active-work.svg"
import ActiveSettings from "../../assets/svgs/settings-02.svg"


interface SidebarProps {
  collapsed: boolean;
  iconsOnly: boolean;
  onToggle: () => void;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  iconsOnly,
  onToggle,
  onClose,
}) => {
  const [mainSidebarVisible, setMainSidebarVisible] = useState(true);
  
  const menuItems = [
    { path: "/search", label: "Search", icon: Search , activeIcon: ActiveSearch },
    { path: "/notes", label: "Notes", icon: Notes , activeIcon: ActiveNotes },
    { path: "/people", label: "People", icon: People , activeIcon: ActivePeople },
    { path: "/tags", label: "Tags", icon: Tags , activeIcon: ActiveTags },
    { path: "/workspaces", label: "Workspaces", icon: Workspaces , activeIcon: ActiveWorkspaces },
    { path: "/settings", label: "Settings", icon: Settings , activeIcon: ActiveSettings },
  ];

  const toggleMainSidebar = () => {
    setMainSidebarVisible(!mainSidebarVisible);
  };

  if (collapsed) return null;

  return (
    <div className="flex h-full">
      {/* Main Sidebar - conditionally rendered */}
      {mainSidebarVisible && (
        <div
          className={`bg-[#F5F5F6] flex flex-col transition-all duration-300 font-poppins h-full ${
            iconsOnly ? "w-16" : "w-[178px]"
          }`}
        >
      {/* Navigation - no logo section needed */}
      <nav className="flex-1 p-4">
        <div className={`flex mb-6 items-center ${iconsOnly ? 'justify-center' : 'justify-between'}`}>
          {!iconsOnly && (
            <p className="text-[18px] font-medium">Sources</p>
          )}
          <div className="flex items-center space-x-1">
            <button
              onClick={onToggle}
              className="p-1 rounded hover:bg-[#F5F5F6] transition-colors"
              title={iconsOnly ? "Expand sidebar" : "Collapse to icons"}
            >
              {iconsOnly ? (
                <HiChevronRight className="w-[20px] h-[20px] text-gray-600" />
              ) : (
                <img
                  src={LeftIcon}
                  alt="Collapse"
                  className="w-[18px] h-[18px]"
                />
              )}
            </button>
          </div>
        </div>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center rounded-lg text-sm font-medium transition-colors ${
                      iconsOnly 
                        ? "justify-center px-2 py-3" 
                        : "px-3 py-2"
                    } ${
                      isActive ? "bg-[#ECECED] text-black" : ""
                    }`
                  }
                  title={iconsOnly ? item.label : undefined}
                >
                  {({ isActive }) => (
                    <>
                      <img src={isActive ? item.activeIcon : item.icon} className={`w-[18px] h-[18px] flex-shrink-0`} />
                      {!iconsOnly && (
                        <span className="ml-3 text-[14px] text-black">
                          {item.label}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Upgrade Section */}
      {!iconsOnly && (
        <div className="p-4">
          <div className="rounded-lg p-4">
            <img
              src={SideBottom}
              alt="SideBottom"
              className="w-[36px] h-[36px]"
            />
            <div className="flex items-start space-x-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-[14px] font-semibold text-gray-900 mb-1">
                  Unlock notivo AI{" "}
                  <span className="flex items-center gap-2">
                    {" "}
                    Power{" "}
                    <img
                      src={ArrowRight}
                      alt="Arrow Right"
                      width="15px"
                      height="15px"
                    />
                  </span>
                </h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  Upgrade now to harness advanced AI features and revolutionize
                  your workflow.
                </p>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white text-xs font-medium py-2 px-3 rounded-full transition-colors">
                  Unlock Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
      )}
      
      {/* Right SimpleSidebar - always visible */}
      <SimpleSidebar onToggle={toggleMainSidebar} />
    </div>
  );
};

export default Sidebar;
