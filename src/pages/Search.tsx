import React, { useState } from 'react';
import { HiOutlineSearch, HiOutlineFilter, HiOutlineViewGrid, HiOutlineViewList } from 'react-icons/hi';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const searchResults = [
    {
      id: 1,
      title: 'Meeting Notes - Q4 Planning',
      type: 'Note',
      content: 'Quarterly planning meeting with stakeholders to discuss upcoming initiatives...',
      tags: ['meeting', 'planning', 'q4'],
      date: '2024-08-10'
    },
    {
      id: 2,
      title: 'John Smith',
      type: 'Person',
      content: 'Senior Developer at Tech Corp, specializes in React and Node.js...',
      tags: ['developer', 'react', 'nodejs'],
      date: '2024-08-09'
    },
    {
      id: 3,
      title: 'Product Development Workspace',
      type: 'Workspace',
      content: 'Main workspace for all product development activities and documentation...',
      tags: ['product', 'development', 'workspace'],
      date: '2024-08-08'
    }
  ];

  const filteredResults = searchResults.filter(result =>
    result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Search</h1>
        <p className="text-gray-600">Find notes, people, workspaces, and more across your organization.</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <HiOutlineSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for anything..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
              <HiOutlineFilter className="w-5 h-5" />
              <span>Filter</span>
            </button>
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <HiOutlineViewList className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <HiOutlineViewGrid className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {filteredResults.length} Results {searchTerm && `for "${searchTerm}"`}
          </h3>
        </div>
        
        <div className={`p-6 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}`}>
          {filteredResults.map((result) => (
            <div key={result.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-gray-900">{result.title}</h4>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {result.type}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{result.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {result.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-500">{result.date}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredResults.length === 0 && (
          <div className="p-12 text-center">
            <HiOutlineSearch className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
