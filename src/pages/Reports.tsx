

const Reports = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Reports</h1>
            <p className="text-gray-600">
              View analytics and insights from your workspaces and activities.
            </p>
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Workspace Activity Report */}
            {/* <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Workspace Activity</h3>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Track workspace usage, member activity, and engagement metrics.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">142</span>
                <span className="text-sm text-green-600 font-medium">↗ +12%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Active this week</p>
            </div> */}

            {/* Notes Report */}
            {/* <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Notes Created</h3>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Monitor note creation trends and productivity metrics.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">1,234</span>
                <span className="text-sm text-green-600 font-medium">↗ +8%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">This month</p>
            </div> */}

            {/* Team Collaboration */}
            {/* <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Team Collaboration</h3>
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Analyze team interactions, shared resources, and collaboration patterns.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">89%</span>
                <span className="text-sm text-green-600 font-medium">↗ +5%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Engagement rate</p>
            </div> */}

            {/* Usage Analytics */}
            {/* <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Usage Analytics</h3>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Track feature usage, time spent, and user behavior patterns.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">4.2h</span>
                <span className="text-sm text-red-600 font-medium">↘ -3%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Average daily usage</p>
            </div> */}

            {/* Performance Metrics */}
            {/* <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Performance Metrics</h3>
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Monitor system performance, load times, and reliability metrics.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">99.8%</span>
                <span className="text-sm text-green-600 font-medium">↗ +0.2%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Uptime</p>
            </div> */}

            {/* Storage Usage */}
            {/* <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Storage Usage</h3>
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Track storage consumption, file uploads, and capacity planning.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">2.4GB</span>
                <span className="text-sm text-orange-600 font-medium">↗ +15%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Used of 10GB</p>
            </div> */}
          </div>

          {/* Recent Activity Section */}
          {/* <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Report Activity</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="divide-y divide-gray-200">
                {[
                  { action: 'Weekly workspace report generated', time: '2 hours ago', type: 'auto' },
                  { action: 'Performance metrics updated', time: '4 hours ago', type: 'system' },
                  { action: 'User activity report exported', time: '1 day ago', type: 'manual' },
                  { action: 'Monthly summary created', time: '3 days ago', type: 'auto' },
                  { action: 'Custom report downloaded', time: '1 week ago', type: 'manual' },
                ].map((activity, index) => (
                  <div key={index} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'auto' ? 'bg-green-400' : 
                        activity.type === 'system' ? 'bg-blue-400' : 'bg-gray-400'
                      }`}></div>
                      <span className="text-sm text-gray-900">{activity.action}</span>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Reports;
