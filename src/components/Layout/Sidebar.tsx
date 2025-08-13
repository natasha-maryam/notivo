import React from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineSearch,
  HiOutlineDocumentText,
  HiOutlineUsers,
  HiOutlineTag,
  HiOutlineBriefcase,
  HiOutlineCog,
  HiOutlineMenuAlt2,
} from "react-icons/hi";
import SideBottom from "../../assets/images/sidebar-bottom.png";
import ArrowRight from "../../assets/svgs/arrow-right.svg";
import LeftIcon from "../../assets/svgs/chevron-left.svg";

interface SidebarProps {
  collapsed: boolean;
  iconsOnly: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  iconsOnly,
  onToggle,
}) => {
  const menuItems = [
    { path: "/search", label: "Search", icon: HiOutlineSearch },
    { path: "/notes", label: "Notes", icon: HiOutlineDocumentText },
    { path: "/people", label: "People", icon: HiOutlineUsers },
    { path: "/tags", label: "Tags", icon: HiOutlineTag },
    { path: "/workspaces", label: "Workspaces", icon: HiOutlineBriefcase },
    { path: "/settings", label: "Settings", icon: HiOutlineCog },
  ];

  if (collapsed) return null;

  return (
    <div
      className={`bg-[#F5F5F6] flex flex-col transition-all duration-300 font-poppins ${
        iconsOnly ? "w-16" : "w-[178px]"
      }`}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <img src="/logo.avif" alt="notivo logo" className="h-4" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="flex justify-between mb-6 items-center">
          <p className="text-[18px] font-medium">Sources</p>
          <img
            src={LeftIcon}
            alt="Left Icon"
            className="w-[18px] h-[18px] cursor-pointer"
            onClick={onToggle}
          />
        </div>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? "bg-[#ECECED] text-black" : ""
                    }`
                  }
                  title={iconsOnly ? item.label : undefined}
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`w-5 h-5 flex-shrink-0 ${
                          isActive ? "text-black" : "text-[#9C9C9C]"
                        }`}
                      />
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
  );
};

export default Sidebar;
