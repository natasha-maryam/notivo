import React from 'react';

const PlansAndBillingTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Plans & Billing</h3>
        <div className="space-y-4">
          {/* Current Plan */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Current Plan</h4>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2">You are currently on the <span className="font-medium">Pro Plan</span></p>
                <p className="text-xs text-gray-500">Next billing date: January 15, 2025</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">$29/month</p>
                <button className="text-sm text-blue-600 hover:text-blue-700">Change plan</button>
              </div>
            </div>
          </div>

          {/* Billing Information */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-4">Billing Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                <input
                  type="text"
                  defaultValue="Richard Joseph"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="richardj89@gmail.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
              <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <span className="text-sm text-gray-700">**** **** **** 4532</span>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700">Update</button>
              </div>
            </div>
          </div>

          {/* Usage */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-4">Current Usage</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Notes created</span>
                  <span className="text-gray-900">245 / 1,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24.5%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Storage used</span>
                  <span className="text-gray-900">2.3 GB / 10 GB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '23%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Team members</span>
                  <span className="text-gray-900">8 / 25</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '32%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Billing History */}
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">Billing History</h4>
              <button className="text-sm text-blue-600 hover:text-blue-700">View all</button>
            </div>
            <div className="space-y-2">
              {[
                { date: 'Dec 15, 2024', amount: '$29.00', status: 'Paid' },
                { date: 'Nov 15, 2024', amount: '$29.00', status: 'Paid' },
                { date: 'Oct 15, 2024', amount: '$29.00', status: 'Paid' },
              ].map((invoice, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="text-sm text-gray-900">{invoice.date}</p>
                    <p className="text-xs text-gray-500">Monthly subscription</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{invoice.amount}</p>
                    <p className="text-xs text-green-600">{invoice.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansAndBillingTab;
