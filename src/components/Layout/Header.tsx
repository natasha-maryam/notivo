import React from "react";
import { BiPlus } from "react-icons/bi";
import Search from "../../assets/svgs/search-refraction.svg";
import Tag from "../../assets/svgs/tag.svg";
import Refresh from "../../assets/svgs/refresh-cw.svg";
import Bell from "../../assets/svgs/bell.svg";
import Share from "../../assets/svgs/share-2.svg";
import Maximize from "../../assets/svgs/maximize-2.svg";
import Profile from "../../assets/svgs/Label.svg"

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="bg-[#F5F5F6] px-6 py-4 border-b border-[#EAEAEB]">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 lg:hidden"
          >
            <HiOutlineMenuAlt2 className="w-5 h-5" />
          </button> */}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
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

          <button>
            <img src={Profile} alt="Profile" className="w-[36px] h-[36px]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
