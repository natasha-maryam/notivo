import React, { useState } from 'react';
import { HiOutlineUsers, HiOutlinePlus, HiOutlineSearch, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const People = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const people = [
    {
      id: 1,
      name: 'Johanna Fox',
      role: 'Product Manager',
      email: 'johanna.fox@company.com',
      phone: '+1 (555) 123-4567',
      avatar: 'JF',
      status: 'online',
      department: 'Product',
      tags: ['product', 'management', 'strategy']
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'Senior Developer',
      email: 'john.smith@company.com',
      phone: '+1 (555) 234-5678',
      avatar: 'JS',
      status: 'online',
      department: 'Engineering',
      tags: ['react', 'nodejs', 'frontend']
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'UX Designer',
      email: 'sarah.johnson@company.com',
      phone: '+1 (555) 345-6789',
      avatar: 'SJ',
      status: 'away',
      department: 'Design',
      tags: ['design', 'ux', 'research']
    },
    {
      id: 4,
      name: 'Mike Wilson',
      role: 'DevOps Engineer',
      email: 'mike.wilson@company.com',
      phone: '+1 (555) 456-7890',
      avatar: 'MW',
      status: 'offline',
      department: 'Engineering',
      tags: ['devops', 'aws', 'kubernetes']
    },
    {
      id: 5,
      name: 'Emily Chen',
      role: 'Marketing Manager',
      email: 'emily.chen@company.com',
      phone: '+1 (555) 567-8901',
      avatar: 'EC',
      status: 'online',
      department: 'Marketing',
      tags: ['marketing', 'growth', 'analytics']
    }
  ];

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getAvatarColor = (index: number) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500'];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">People</h1>
          <p className="text-gray-600">Manage team members and their information.</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          <HiOutlinePlus className="w-5 h-5" />
          <span>Add Person</span>
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="relative">
          <HiOutlineSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search people..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* People Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPeople.map((person, index) => (
          <div key={person.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <div className={`w-12 h-12 ${getAvatarColor(index)} rounded-full flex items-center justify-center text-white font-semibold`}>
                  {person.avatar}
                </div>
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(person.status)} rounded-full border-2 border-white`}></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{person.name}</h3>
                <p className="text-sm text-gray-600">{person.role}</p>
                <p className="text-xs text-gray-500">{person.department}</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <HiOutlineMail className="w-4 h-4" />
                <span className="truncate">{person.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <HiOutlinePhone className="w-4 h-4" />
                <span>{person.phone}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {person.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredPeople.length === 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <HiOutlineUsers className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No people found</h3>
          <p className="text-gray-600 mb-4">
            {searchTerm ? 'Try adjusting your search terms.' : 'Get started by adding team members.'}
          </p>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mx-auto">
            <HiOutlinePlus className="w-5 h-5" />
            <span>Add Person</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default People;
