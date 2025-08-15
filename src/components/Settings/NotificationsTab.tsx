import React, { useState } from 'react';

const NotificationsTab = () => {
  const [notificationSettings, setNotificationSettings] = useState([
    { id: 1, title: 'Email reminder for pending task', enabled: true },
    { id: 2, title: 'Weekly summary reports', enabled: false },
    { id: 3, title: 'Browser notifications for new notes', enabled: true },
  ]);

  const toggleSetting = (id: number) => {
    setNotificationSettings(prev => 
      prev.map(setting => 
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  return (
    <div className="border border-[#EDEDED] rounded-xl p-4">
      <h3
        className="text-[18px] font-medium text-gray-900 mb-6"
        style={{ letterSpacing: "-1px" }}
      >
        Notifications
      </h3>

      <div className="space-y-6">
        {notificationSettings.map((setting) => (
          <div key={setting.id} className="flex items-center justify-between border-b border-[#EDEDED] py-3">
            <span className="text-base text-gray-700">{setting.title}</span>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={setting.enabled}
                onChange={() => toggleSetting(setting.id)}
                className="sr-only peer"
              />
              <div
                className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                  setting.enabled ? "bg-gray-800" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out translate-y-0.5 ${
                    setting.enabled ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsTab;
