import React, { useState } from 'react';
import { HiOutlineDocumentText, HiOutlinePlus, HiOutlineSearch, HiOutlineDotsVertical } from 'react-icons/hi';
import { BiPin } from 'react-icons/bi';

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const notes = [
    {
      id: 1,
      title: 'Project Kickoff Meeting',
      content: 'Discussed project timeline, deliverables, and team responsibilities. Key stakeholders identified and contact information shared.',
      tags: ['meeting', 'project', 'kickoff'],
      pinned: true,
      date: '2024-08-12',
      author: 'Johanna Fox'
    },
    {
      id: 2,
      title: 'Technical Architecture Review',
      content: 'Reviewed the proposed technical architecture for the new platform. Identified potential scalability concerns and mitigation strategies.',
      tags: ['technical', 'architecture', 'review'],
      pinned: false,
      date: '2024-08-11',
      author: 'John Smith'
    },
    {
      id: 3,
      title: 'User Research Findings',
      content: 'Compiled findings from user interviews conducted last week. Several pain points identified in the current user flow.',
      tags: ['research', 'users', 'findings'],
      pinned: true,
      date: '2024-08-10',
      author: 'Sarah Johnson'
    },
    {
      id: 4,
      title: 'Weekly Team Standup',
      content: 'Team progress updates, blockers discussion, and upcoming sprint planning. All team members present.',
      tags: ['standup', 'team', 'progress'],
      pinned: false,
      date: '2024-08-09',
      author: 'Mike Wilson'
    }
  ];

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const pinnedNotes = filteredNotes.filter(note => note.pinned);
  const unpinnedNotes = filteredNotes.filter(note => !note.pinned);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notes</h1>
          <p className="text-gray-600">Capture and organize your thoughts and meeting notes.</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          <HiOutlinePlus className="w-5 h-5" />
          <span>New Note</span>
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="relative">
          <HiOutlineSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Pinned Notes */}
      {pinnedNotes.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <BiPin className="w-5 h-5 mr-2" />
            Pinned Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pinnedNotes.map((note) => (
              <div key={note.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <HiOutlineDocumentText className="w-5 h-5 text-gray-400" />
                    <h3 className="font-semibold text-gray-900 truncate">{note.title}</h3>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <HiOutlineDotsVertical className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">{note.content}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {note.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{note.author}</span>
                  <span>{note.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Notes */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">All Notes</h2>
        <div className="bg-white rounded-lg border border-gray-200">
          {unpinnedNotes.map((note, index) => (
            <div key={note.id} className={`p-4 hover:bg-gray-50 ${index !== unpinnedNotes.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <HiOutlineDocumentText className="w-5 h-5 text-gray-400" />
                    <h3 className="font-semibold text-gray-900">{note.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{note.content}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-wrap gap-1">
                      {note.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{note.author}</span>
                    <span className="text-xs text-gray-500">{note.date}</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 ml-4">
                  <HiOutlineDotsVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredNotes.length === 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <HiOutlineDocumentText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm ? 'Try adjusting your search terms.' : 'Get started by creating your first note.'}
          </p>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mx-auto">
            <HiOutlinePlus className="w-5 h-5" />
            <span>Create Note</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Notes;
