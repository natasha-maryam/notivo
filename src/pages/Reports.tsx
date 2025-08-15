
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/svgs/search-refraction.svg";
import CalendarIcon from "../assets/svgs/Frame.svg";
import DownloadIcon from "../assets/svgs/download.svg";
import FilterIcon from "../assets/svgs/filter.svg";
import ChevronDownIcon1 from "../assets/svgs/arrow-left.svg";
import PDFIcon from "../assets/svgs/file.svg";
 import ChevronDownIcon from "../assets/svgs/chevron-left.svg";


const Reports = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeople, setSelectedPeople] = useState("@select");
  const [selectedTags, setSelectedTags] = useState("#select");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showPeopleDropdown, setShowPeopleDropdown] = useState(false);
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);

  // Mock data for dropdowns
  const people = [
    { id: "john_wilson", name: "John Wilson" },
    { id: "sarah_johnson", name: "Sarah Johnson" },
    { id: "johanna_fox", name: "Johanna Fox" },
  ];

  const tags = [
    { id: "feedback", name: "Feedback" },
    { id: "coaching", name: "Coaching" },
    { id: "quarterly", name: "Quarterly" },
    { id: "monthly", name: "Monthly" },
    { id: "employee", name: "Employee" },
    { id: "notes", name: "Notes" },
    { id: "highlights", name: "Highlights" },
    { id: "leadership", name: "Leadership" },
  ];

  // Mock download history data
  const downloadHistory = [
    {
      id: 1,
      name: "Team Feedback Report - April 2025.pdf",
      date: "May 12, 2025 at 7:45 PM",
      type: "pdf"
    },
    {
      id: 2,
      name: "Coaching Log - John Wilson.pdf",
      date: "May 9, 2025 at 6:15 PM",
      type: "pdf"
    },
    {
      id: 3,
      name: "Quarterly Summary - Q1 2025.pdf",
      date: "May 5, 2025 at 10:30 AM",
      type: "pdf"
    },
    {
      id: 4,
      name: "Monthly Tracker - March 2025.pdf",
      date: "April 4, 2025 at 3:22 PM",
      type: "pdf"
    },
    {
      id: 5,
      name: "Employee Overview - Sarah.pdf",
      date: "March 18, 2025 at 8:55 AM",
      type: "pdf"
    },
    {
      id: 6,
      name: "All Notes Archive - February 2025.pdf",
      date: "March 1, 2025 at 11:02 AM",
      type: "pdf"
    },
    {
      id: 7,
      name: "2024 Year-End Highlights.pdf",
      date: "January 15, 2025 at 6:40 PM",
      type: "pdf"
    },
    {
      id: 8,
      name: "Leadership Trends - 2023 Review.pdf",
      date: "December 10, 2024 at 2:20 PM",
      type: "pdf"
    },
  ];

  const handleDownload = (reportName: string) => {
    // Mock download functionality
    console.log(`Downloading ${reportName}`);
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen bg-[#ffffff]">
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-start mb-8 flex-col">
             <button 
              onClick={() => navigate('/workspaces')}
              className=" my-5 hover:bg-gray-100 rounded-full"
            >
              <img 
                src={ChevronDownIcon1} 
                alt="Back" 
                className="h-6 w-6 " 
              />
            </button>
         
            <h1 className="text-2xl font-semibold text-gray-900">Downloads</h1>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={SearchIcon} alt="Search" className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-[10px] leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search all reports..."
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Select People */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#33333399] mb-3">
                Select people
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowPeopleDropdown(!showPeopleDropdown)}
                  className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 bg-white rounded-[100px] text-left focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <span className="text-gray-700">{selectedPeople}</span>
                  <img 
                    src={ChevronDownIcon} 
                    alt="Chevron" 
className={`h-4 w-4 text-gray-400 transform transition-transform ${
  showPeopleDropdown ? 'rotate-180' : 'rotate-[270deg]'
}`}
                  />
                </button>
                {showPeopleDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {people.map((person) => (
                      <button
                        key={person.id}
                        onClick={() => {
                          setSelectedPeople(`@${person.name}`);
                          setShowPeopleDropdown(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
                      >
                        @{person.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Select Tags */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#33333399] mb-3">
                Select Tags
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowTagsDropdown(!showTagsDropdown)}
                  className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 bg-white rounded-[100px] text-left focus:border-[#8DE87F] hover:border-[#8DE87F] focus:outline-none"
                >
                  <span className="text-gray-700">{selectedTags}</span>
                  <img 
                    src={ChevronDownIcon} 
                    alt="Chevron" 
                    className={`h-4 w-4 text-gray-400 transform transition-transform ${showTagsDropdown ? 'rotate-180' : 'rotate-[270deg]'}`} 
                  />
                </button>
                {showTagsDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {tags.map((tag) => (
                      <button
                        key={tag.id}
                        onClick={() => {
                          setSelectedTags(`#${tag.name}`);
                          setShowTagsDropdown(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
                      >
                        #{tag.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* From Date */}
            <div>
              <label className="block text-sm font-medium text-[#33333399] mb-3">
                From
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={fromDate}
                  
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 bg-white rounded-[100px] focus:border-[#8DE87F] hover:border-[#8DE87F] focus:outline-none"
                  placeholder="Choose date"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <img src={CalendarIcon} alt="Calendar" className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* To Date */}
            <div>
              <label className="block text-sm font-medium text-[#33333399] mb-3">
                To
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 bg-white rounded-[100px] focus:border-[#8DE87F] hover:border-[#8DE87F] focus:outline-none"
                  placeholder="Choose date"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <img src={CalendarIcon} alt="Calendar" className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Download History Section */}
          <div className=" ">
            <div className=" py-[18px]">
              <h2 className="text-lg font-medium text-gray-900">Download history</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      People
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {downloadHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                                              <img src={PDFIcon} alt="Calendar" className="h-6 w-6 " />

                          <div className="ml-3">
                            <div className="text-sm font-medium text-[#333333]">
                              {item.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-700">{item.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleDownload(item.name)}
                          className="inline-flex items-center p-2 border border-transparent rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:border-[#8DE87F] hover:border-[#8DE87F] focus:outline-none"
                        >
                          <img src={DownloadIcon} alt="Download" className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
