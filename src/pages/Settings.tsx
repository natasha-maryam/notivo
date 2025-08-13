// import React, { useState } from 'react';
// import {
//   HiOutlineCog,
//   HiOutlineUser,
//   HiOutlineBell,
//   HiOutlineShieldCheck,
//   HiOutlineColorSwatch,
//   HiOutlineGlobe,
//   HiOutlineSupport
// } from 'react-icons/hi';

const Settings = () => {
  // const [activeTab, setActiveTab] = useState('profile');

  // const tabs = [
  //   { id: 'profile', label: 'Profile', icon: HiOutlineUser },
  //   { id: 'notifications', label: 'Notifications', icon: HiOutlineBell },
  //   { id: 'security', label: 'Security', icon: HiOutlineShieldCheck },
  //   { id: 'appearance', label: 'Appearance', icon: HiOutlineColorSwatch },
  //   { id: 'workspace', label: 'Workspace', icon: HiOutlineGlobe },
  //   { id: 'support', label: 'Support', icon: HiOutlineSupport },
  // ];

  // const renderTabContent = () => {
  //   switch (activeTab) {
  //     case 'profile':
  //       return (
  //         <div className="space-y-6">
  //           <div>
  //             <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
  //             <div className="space-y-4">
  //               <div className="flex items-center space-x-4">
  //                 <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
  //                   J
  //                 </div>
  //                 <div>
  //                   <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
  //                     Change Avatar
  //                   </button>
  //                 </div>
  //               </div>

  //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //                 <div>
  //                   <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
  //                   <input
  //                     type="text"
  //                     defaultValue="Johanna"
  //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  //                   />
  //                 </div>
  //                 <div>
  //                   <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
  //                   <input
  //                     type="text"
  //                     defaultValue="Fox"
  //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  //                   />
  //                 </div>
  //                 <div>
  //                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
  //                   <input
  //                     type="email"
  //                     defaultValue="johanna.fox@company.com"
  //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  //                   />
  //                 </div>
  //                 <div>
  //                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
  //                   <input
  //                     type="tel"
  //                     defaultValue="+1 (555) 123-4567"
  //                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       );

  //     case 'notifications':
  //       return (
  //         <div className="space-y-6">
  //           <div>
  //             <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
  //             <div className="space-y-4">
  //               {[
  //                 { title: 'Email Notifications', desc: 'Receive updates via email', enabled: true },
  //                 { title: 'Push Notifications', desc: 'Browser push notifications', enabled: false },
  //                 { title: 'Weekly Summary', desc: 'Weekly activity summary', enabled: true },
  //                 { title: 'Team Updates', desc: 'Notifications from team members', enabled: true },
  //                 { title: 'Workspace Changes', desc: 'Changes to your workspaces', enabled: false },
  //               ].map((item, index) => (
  //                 <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
  //                   <div>
  //                     <h4 className="font-medium text-gray-900">{item.title}</h4>
  //                     <p className="text-sm text-gray-600">{item.desc}</p>
  //                   </div>
  //                   <label className="relative inline-flex items-center cursor-pointer">
  //                     <input type="checkbox" defaultChecked={item.enabled} className="sr-only peer" />
  //                     <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
  //                   </label>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       );

  //     case 'security':
  //       return (
  //         <div className="space-y-6">
  //           <div>
  //             <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
  //             <div className="space-y-4">
  //               <div className="p-4 border border-gray-200 rounded-lg">
  //                 <h4 className="font-medium text-gray-900 mb-2">Change Password</h4>
  //                 <p className="text-sm text-gray-600 mb-4">Update your password to keep your account secure.</p>
  //                 <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
  //                   Change Password
  //                 </button>
  //               </div>

  //               <div className="p-4 border border-gray-200 rounded-lg">
  //                 <h4 className="font-medium text-gray-900 mb-2">Two-Factor Authentication</h4>
  //                 <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account.</p>
  //                 <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
  //                   Enable 2FA
  //                 </button>
  //               </div>

  //               <div className="p-4 border border-gray-200 rounded-lg">
  //                 <h4 className="font-medium text-gray-900 mb-2">Active Sessions</h4>
  //                 <p className="text-sm text-gray-600 mb-4">Manage your active login sessions.</p>
  //                 <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">
  //                   View Sessions
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       );

  //     case 'appearance':
  //       return (
  //         <div className="space-y-6">
  //           <div>
  //             <h3 className="text-lg font-semibold text-gray-900 mb-4">Appearance Settings</h3>
  //             <div className="space-y-4">
  //               <div className="p-4 border border-gray-200 rounded-lg">
  //                 <h4 className="font-medium text-gray-900 mb-2">Theme</h4>
  //                 <p className="text-sm text-gray-600 mb-4">Choose your preferred theme.</p>
  //                 <div className="flex space-x-4">
  //                   <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Light</button>
  //                   <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">Dark</button>
  //                   <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">Auto</button>
  //                 </div>
  //               </div>

  //               <div className="p-4 border border-gray-200 rounded-lg">
  //                 <h4 className="font-medium text-gray-900 mb-2">Sidebar</h4>
  //                 <p className="text-sm text-gray-600 mb-4">Customize sidebar behavior.</p>
  //                 <div className="space-y-2">
  //                   <label className="flex items-center">
  //                     <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
  //                     <span className="ml-2 text-sm text-gray-700">Auto-collapse sidebar</span>
  //                   </label>
  //                   <label className="flex items-center">
  //                     <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
  //                     <span className="ml-2 text-sm text-gray-700">Remember sidebar state</span>
  //                   </label>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       );

  //     case 'workspace':
  //       return (
  //         <div className="space-y-6">
  //           <div>
  //             <h3 className="text-lg font-semibold text-gray-900 mb-4">Workspace Settings</h3>
  //             <div className="space-y-4">
  //               <div className="p-4 border border-gray-200 rounded-lg">
  //                 <h4 className="font-medium text-gray-900 mb-2">Default Workspace</h4>
  //                 <p className="text-sm text-gray-600 mb-4">Choose which workspace to open by default.</p>
  //                 <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
  //                   <option>Product Development</option>
  //                   <option>Design System</option>
  //                   <option>Marketing Campaigns</option>
  //                 </select>
  //               </div>

  //               <div className="p-4 border border-gray-200 rounded-lg">
  //                 <h4 className="font-medium text-gray-900 mb-2">Auto-save</h4>
  //                 <p className="text-sm text-gray-600 mb-4">Automatically save changes to notes.</p>
  //                 <label className="relative inline-flex items-center cursor-pointer">
  //                   <input type="checkbox" defaultChecked className="sr-only peer" />
  //                   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
  //                 </label>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       );

  //     case 'support':
  //       return (
  //         <div className="space-y-6">
  //           <div>
  //             <h3 className="text-lg font-semibold text-gray-900 mb-4">Help & Support</h3>
  //             <div className="space-y-4">
  //               <div className="p-4 border border-gray-200 rounded-lg">
  //                 <h4 className="font-medium text-gray-900 mb-2">Documentation</h4>
  //                 <p className="text-sm text-gray-600 mb-4">Access our comprehensive documentation and guides.</p>
  //                 <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">
  //                   View Docs
  //                 </button>
  //               </div>

  //               <div className="p-4 border border-gray-200 rounded-lg">
  //                 <h4 className="font-medium text-gray-900 mb-2">Contact Support</h4>
  //                 <p className="text-sm text-gray-600 mb-4">Get help from our support team.</p>
  //                 <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
  //                   Contact Support
  //                 </button>
  //               </div>

  //               <div className="p-4 border border-gray-200 rounded-lg">
  //                 <h4 className="font-medium text-gray-900 mb-2">Feedback</h4>
  //                 <p className="text-sm text-gray-600 mb-4">Share your thoughts and suggestions.</p>
  //                 <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">
  //                   Send Feedback
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       );

  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="flex">
     
          <div className="w-64 border-r border-gray-200 bg-gray-50">
            <nav className="p-4 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>


          <div className="flex-1 p-6">
            {renderTabContent()}
            
       
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-end space-x-3">
                <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Settings;
