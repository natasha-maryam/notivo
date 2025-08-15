import React from 'react';

const DataManagementTab = () => {
  return (
    <div className="border border-[#EDEDED] rounded-xl p-4">
      {/* Title */}
      <h3
        className="text-[18px] font-medium text-gray-900 mb-6"
        style={{ letterSpacing: "-1px" }}
      >
        Data Management
      </h3>

      {/* Export all data section */}
      <div className="space-y-4 border-b border-[#EDEDED] py-3 mb-2 ">
        <h3 className="text-base font-medium text-gray-900">Export all data</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Download all your notes and data
        </p>
        <button className="px-4 py-2 bg-[#F5F5F6]  text-black text-sm font-medium rounded-lg transition-colors">
          Export
        </button>
      </div>

      {/* Delete account section */}
      <div className="space-y-4">
        <h3 className="text-base font-medium text-gray-900">Delete account</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Permanently delete your account and all data
        </p>
        <button className="px-4 py-2 bg-[#E6393C] hover:bg-[#E6393C] text-white text-sm font-medium rounded-lg transition-colors">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DataManagementTab;
