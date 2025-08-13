import React from "react";
import LayoutLeft from "../../assets/svgs/layout-left.svg"

interface SimpleSidebarProps {
  onToggle: () => void;
  className?: string;
}

const SimpleSidebar: React.FC<SimpleSidebarProps> = ({ 
  onToggle, 
  className = "" 
}) => {
  return (
    <div
      className={`bg-[#FAFAFA] flex flex-col w-16 h-full  ${className}`}
    >
      <div className="p-4">
        <div className="flex justify-center">
          <button
            onClick={onToggle}
            className="p-2 rounded hover:bg-[#FAFAFA] transition-colors"
            title="Toggle Sidebar"
          >
            <img src={LayoutLeft} alt="Close" className="w-[18px] h-[18px] " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleSidebar;
