// import React, { useState } from 'react';
// import { HiOutlineTag, HiOutlinePlus, HiOutlineSearch, HiOutlineDotsVertical } from 'react-icons/hi';

const Tags = () => {
  // const [searchTerm, setSearchTerm] = useState('');

  // const tags = [
  //   { id: 1, name: 'meeting', count: 24, color: 'bg-blue-500', description: 'Meeting related notes and activities' },
  //   { id: 2, name: 'project', count: 18, color: 'bg-green-500', description: 'Project management and planning' },
  //   { id: 3, name: 'design', count: 15, color: 'bg-purple-500', description: 'Design assets and discussions' },
  //   { id: 4, name: 'development', count: 32, color: 'bg-orange-500', description: 'Development tasks and code reviews' },
  //   { id: 5, name: 'research', count: 12, color: 'bg-pink-500', description: 'User research and market analysis' },
  //   { id: 6, name: 'marketing', count: 9, color: 'bg-red-500', description: 'Marketing campaigns and strategies' },
  //   { id: 7, name: 'planning', count: 21, color: 'bg-indigo-500', description: 'Strategic planning and roadmaps' },
  //   { id: 8, name: 'feedback', count: 7, color: 'bg-yellow-500', description: 'User and stakeholder feedback' },
  //   { id: 9, name: 'documentation', count: 16, color: 'bg-teal-500', description: 'Technical and process documentation' },
  //   { id: 10, name: 'review', count: 11, color: 'bg-gray-500', description: 'Code and design reviews' }
  // ];

  // const filteredTags = tags.filter(tag =>
  //   tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   tag.description.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const sortedTags = filteredTags.sort((a, b) => b.count - a.count);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tags</h1>
          <p className="text-gray-600">
            Organize and categorize your content with tags.
          </p>
        </div>
      </div>

      {/* 
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="relative">
          <HiOutlineSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Tags</p>
              <p className="text-2xl font-semibold text-gray-900">{tags.length}</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-lg">
              <HiOutlineTag className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Most Used</p>
              <p className="text-2xl font-semibold text-gray-900">#{sortedTags[0]?.name}</p>
            </div>
            <div className={`${sortedTags[0]?.color} p-3 rounded-lg`}>
              <HiOutlineTag className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Usage</p>
              <p className="text-2xl font-semibold text-gray-900">{tags.reduce((sum, tag) => sum + tag.count, 0)}</p>
            </div>
            <div className="bg-green-500 p-3 rounded-lg">
              <HiOutlineTag className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">All Tags</h3>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedTags.map((tag) => (
              <div key={tag.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${tag.color} rounded-lg flex items-center justify-center`}>
                      <HiOutlineTag className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">#{tag.name}</h4>
                      <p className="text-sm text-gray-600">{tag.count} items</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <HiOutlineDotsVertical className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-600">{tag.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {filteredTags.length === 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <HiOutlineTag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tags found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm ? 'Try adjusting your search terms.' : 'Get started by creating your first tag.'}
          </p>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mx-auto">
            <HiOutlinePlus className="w-5 h-5" />
            <span>Create Tag</span>
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Tags;
