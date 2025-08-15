import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../assets/svgs/search-refraction.svg';
import Filter from "../assets/svgs/filter.svg";
import Menu from "../assets/svgs/dots-vertical.svg"

const Workspaces = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data matching the design
  const yourWorkspaces = [
    {
      id: 1,
      title: 'Q4 performance review summary',
      description: 'Comprehensive review of team performance metrics...',
      modified: 'July 12, 2025 at 7:50 PM',
      status: 'Final',
      statusColor: 'bg-[#008844] text-white',
      user: 'Sarah, John Wilson',
      tags: ['#feedback', '#performance', '#Q4']
    },
    {
      id: 2,
      title: 'Project Alpha Feedback Compilation',
      description: 'Stakeholder feedback and recommendations...',
      modified: 'July 12, 2025 at 7:50 PM',
      status: 'Draft',
      statusColor: 'bg-[#E16B16] text-white',
      user: 'Alex Emily Chen',
      tags: ['#feedback', '#project-alpha', '#nextsteps']
    },
    {
      id: 3,
      title: 'Q4 team feedback session',
      description: 'Summary of feedback gathered...',
      modified: 'July 12, 2025 at 7:50 PM',
      status: 'Final',
      statusColor: 'bg-[#008844] text-white',
      user: 'James Davis, Sophia',
      tags: ['#discussion', '#feedback', '#team']
    }
  ];

  const otherWorkspaces = [
    {
      id: 4,
      title: 'Q4 performance review summary',
      description: 'Comprehensive review of team performance metrics...',
      modified: 'July 12, 2025 at 7:50 PM',
      status: 'Final',
       statusColor: 'bg-[#008844] text-white',
      user: 'Alex Emily Chen',
      tags: ['#feedback', '#project-alpha', '#nextsteps']
    },
    {
      id: 5,
      title: 'Q4 performance review summary',
      description: 'Comprehensive review of team performance metrics...',
      modified: 'July 12, 2025 at 7:50 PM',
      status: 'Final',
       statusColor: 'bg-[#008844] text-white',
      user: 'Alex Emily Chen',
      tags: ['#feedback', '#project-alpha', '#nextsteps']
    },
    {
      id: 6,
      title: 'Q4 performance review summary',
      description: 'Comprehensive review of team performance metrics...',
      modified: 'July 12, 2025 at 7:50 PM',
      status: 'Final',
       statusColor: 'bg-[#008844] text-white',
      user: 'Alex Emily Chen',
      tags: ['#feedback', '#project-alpha', '#nextsteps']
    }
  ];

  return (
    <div className="min-h-screen font-poppins bg-white py-4 pl-6 pr-2">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[18px] font-medium text-[#333333] mb-4">
          Workspace
        </h1>

        {/* Search and Filter */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img
                src={SearchIcon}
                alt="Search"
                className="h-5 w-5 text-gray-400"
              />
            </div>
            <input
              type="text"
              placeholder="Search workspaces..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#8DE87F] focus:border-[#8DE87F] bg-transparent"
            />
          </div>
          <button className="px-4 py-2 bg-transparent border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
            <img
              src={Filter}
              alt="Filter"
              className="h-[15px] w-[15px] text-gray-400"
            />
            <span className="text-sm font-medium text-gray-700 bg-transparent">
              Filters
            </span>
          </button>
        </div>
      </div>

      {/* Your workspaces section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[18px] font-medium text-gray-900">
            Your workspaces
          </h2>
          <button 
            onClick={() => navigate('/workspaces/new')}
            className="inline-flex items-center px-3 py-1 text-[14px] font-medium text-white bg-[#333333] rounded-full hover:bg-[#333333] transition-colors"
          >
            <span className="mr-2">+</span>
            New Workspace
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {yourWorkspaces.map((workspace) => (
            <div
              key={workspace.id}
              className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="font-semibold text-gray-900 text-[14px]"
                  style={{ letterSpacing: "-0.5px" }}
                >
                  {workspace.title}
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <img src={Menu} alt="Menu" />
                </button>
              </div>

              <p className="text-[12px] text-[#333333] mb-3 line-clamp-2">
                {workspace.description}
              </p>

              <div className="text-xs text-gray-500 mb-3">
                Modified: {workspace.modified} Status:
                <span
                  className={`ml-2 px-2 py-1 rounded-lg text-xs font-medium ${workspace.statusColor}`}
                >
                  {workspace.status}
                </span>
              </div>

              <div className="flex items-center text-xs text-[#287AFF] mb-3">
                @{workspace.user}
              </div>

              <div className="flex flex-wrap gap-2">
                {workspace.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-black  px-2 py-1 rounded-full border border-[#E5E7EB]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other workspaces section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-[18px] font-medium text-gray-900">
            Other workspaces
          </h2>
          <span className="bg-[#EDEDED] text-gray-600 text-xs px-2 py-1 rounded-full">
            {otherWorkspaces.length}
          </span>
        </div>

        <div className="rounded-lg border border-gray-200">
          {otherWorkspaces.map((workspace, index) => (
            <div
              key={workspace.id}
              className={`p-4 hover:bg-gray-50 transition-colors ${
                index !== otherWorkspaces.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {workspace.title}
                    </h3>
                    <div className="flex gap-2">
                      <div className="text-xs text-gray-500">
                        Modified: {workspace.modified}
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 ml-4">
                        <img src={Menu} alt="Menu" />
                      </button>
                    </div>
                  </div>

                  <p className="text-[12px] text-[#333333] mb-3 line-clamp-2">
                    {workspace.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-xs text-[#287AFF]">
                        @{workspace.user}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {workspace.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-black  px-2 py-1 rounded-full border border-[#E5E7EB]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className='flex gap-1 items-center'>
                      <span className='text-[12px]'> Status:</span>
                      <span
                        className={`ml-2 px-2 py-1 rounded-lg text-xs font-medium ${workspace.statusColor}`}
                      >
                        {workspace.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workspaces;
