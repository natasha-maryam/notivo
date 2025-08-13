import React, { useState } from 'react';
import { HiOutlineBriefcase, HiOutlinePlus, HiOutlineSearch, HiOutlineUsers, HiOutlineDocumentText } from 'react-icons/hi';

const Workspaces = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const workspaces = [
    {
      id: 1,
      name: 'Product Development',
      description: 'Main workspace for all product development activities, feature planning, and technical documentation.',
      members: 12,
      notes: 45,
      color: 'bg-blue-500',
      lastActivity: '2 hours ago',
      status: 'active'
    },
    {
      id: 2,
      name: 'Design System',
      description: 'Centralized design system documentation, components library, and design guidelines.',
      members: 8,
      notes: 28,
      color: 'bg-purple-500',
      lastActivity: '1 day ago',
      status: 'active'
    },
    {
      id: 3,
      name: 'Marketing Campaigns',
      description: 'Campaign planning, content creation, and marketing strategy documentation.',
      members: 6,
      notes: 33,
      color: 'bg-green-500',
      lastActivity: '3 hours ago',
      status: 'active'
    },
    {
      id: 4,
      name: 'User Research',
      description: 'User interview notes, research findings, and behavioral analysis documentation.',
      members: 5,
      notes: 22,
      color: 'bg-orange-500',
      lastActivity: '5 hours ago',
      status: 'active'
    },
    {
      id: 5,
      name: 'Engineering Standards',
      description: 'Code standards, best practices, and technical guidelines for the development team.',
      members: 15,
      notes: 38,
      color: 'bg-red-500',
      lastActivity: '1 week ago',
      status: 'archived'
    },
    {
      id: 6,
      name: 'Client Projects',
      description: 'External client project documentation, requirements, and deliverables tracking.',
      members: 10,
      notes: 56,
      color: 'bg-indigo-500',
      lastActivity: '4 hours ago',
      status: 'active'
    }
  ];

  const filteredWorkspaces = workspaces.filter(workspace =>
    workspace.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workspace.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeWorkspaces = filteredWorkspaces.filter(ws => ws.status === 'active');
  const archivedWorkspaces = filteredWorkspaces.filter(ws => ws.status === 'archived');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Workspaces</h1>
          <p className="text-gray-600">Organize your projects and collaborate with your team.</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          <HiOutlinePlus className="w-5 h-5" />
          <span>New Workspace</span>
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="relative">
          <HiOutlineSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search workspaces..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Workspace Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Workspaces</p>
              <p className="text-2xl font-semibold text-gray-900">{workspaces.length}</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <HiOutlineBriefcase className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-2xl font-semibold text-gray-900">{activeWorkspaces.length}</p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <HiOutlineBriefcase className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Members</p>
              <p className="text-2xl font-semibold text-gray-900">{workspaces.reduce((sum, ws) => sum + ws.members, 0)}</p>
            </div>
            <div className="bg-purple-500 p-3 rounded-lg">
              <HiOutlineUsers className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Notes</p>
              <p className="text-2xl font-semibold text-gray-900">{workspaces.reduce((sum, ws) => sum + ws.notes, 0)}</p>
            </div>
            <div className="bg-orange-500 p-3 rounded-lg">
              <HiOutlineDocumentText className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Workspaces */}
      {activeWorkspaces.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Active Workspaces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeWorkspaces.map((workspace) => (
              <div key={workspace.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${workspace.color} rounded-lg flex items-center justify-center`}>
                    <HiOutlineBriefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{workspace.name}</h3>
                    <p className="text-sm text-gray-500">Last updated {workspace.lastActivity}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{workspace.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <HiOutlineUsers className="w-4 h-4" />
                      <span>{workspace.members}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <HiOutlineDocumentText className="w-4 h-4" />
                      <span>{workspace.notes}</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                    Active
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Archived Workspaces */}
      {archivedWorkspaces.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Archived Workspaces</h2>
          <div className="bg-white rounded-lg border border-gray-200">
            {archivedWorkspaces.map((workspace, index) => (
              <div key={workspace.id} className={`p-4 hover:bg-gray-50 ${index !== archivedWorkspaces.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 ${workspace.color} opacity-60 rounded-lg flex items-center justify-center`}>
                      <HiOutlineBriefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{workspace.name}</h3>
                      <p className="text-sm text-gray-600">{workspace.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{workspace.members} members</span>
                      <span>{workspace.notes} notes</span>
                    </div>
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium">
                      Archived
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredWorkspaces.length === 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <HiOutlineBriefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No workspaces found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm ? 'Try adjusting your search terms.' : 'Get started by creating your first workspace.'}
          </p>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mx-auto">
            <HiOutlinePlus className="w-5 h-5" />
            <span>Create Workspace</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Workspaces;
