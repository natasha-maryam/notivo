import React, { useState } from 'react';

const AISettingsTab = () => {
  const [enableAISuggestions, setEnableAISuggestions] = useState(true);
  const [enableAutoSummary, setEnableAutoSummary] = useState(false);
  const [enableSmartReminders, setEnableSmartReminders] = useState(false);

  const ToggleSwitch = ({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={enabled}
        onChange={onToggle}
      />
      <div className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
        enabled ? 'bg-gray-800' : 'bg-gray-300'
      }`}>
        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
          enabled ? 'translate-x-6' : 'translate-x-0.5'
        } translate-y-0.5`}></div>
      </div>
    </label>
  );

  return (
    <div className="border border-[#EDEDED] rounded-xl p-4">
      <h3
        className="text-[18px] font-medium text-gray-900 mb-6"
        style={{ letterSpacing: "-1px" }}
      >
        AI Settings
      </h3>
      
      <div className="space-y-6">
        {/* Enable AI suggestions */}
        <div className="flex items-center justify-between border-b border-[#EDEDED] py-3">
          <span className="text-[16px] text-gray-700 font-medium">Enable AI suggestions</span>
          <ToggleSwitch 
            enabled={enableAISuggestions} 
            onToggle={() => setEnableAISuggestions(!enableAISuggestions)} 
          />
        </div>

        {/* Enable AI auto-summary in reports */}
        <div className="flex items-center justify-between border-b border-[#EDEDED] py-3">
          <span className="text-[16px] text-gray-700 font-medium">Enable AI auto-summary in reports</span>
          <ToggleSwitch 
            enabled={enableAutoSummary} 
            onToggle={() => setEnableAutoSummary(!enableAutoSummary)} 
          />
        </div>

        {/* Enable smart reminders */}
        <div className="flex items-center justify-between border-b border-[#EDEDED] py-3">
          <span className="text-[16px] text-gray-700 font-medium">Enable smart reminders</span>
          <ToggleSwitch 
            enabled={enableSmartReminders} 
            onToggle={() => setEnableSmartReminders(!enableSmartReminders)} 
          />
        </div>

        {/* Future Extensions */}
        <div className="pt-4">
          <h4 className="text-[16px] font-medium text-[#333333]mb-4">Future Extensions</h4>
          <div className="space-y-2 text-sm text-gray-600 mt-2">
            <div>• Credit usage tracking (pay-per-use model)</div>
            <div>• Language preference for AI suggestions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISettingsTab;
