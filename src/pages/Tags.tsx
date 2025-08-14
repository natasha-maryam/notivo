import React, { useState, useCallback, useEffect } from "react";
import SearchIcon from "../assets/svgs/search-refraction.svg";
import LayoutLeft from "../assets/svgs/layout-left.svg";
import TagIcon from "../assets/svgs/tag.svg";
import Menu from "../assets/svgs/dots-vertical.svg";
import AItips from "../assets/svgs/ai-tips.svg";
import Emojie from "../assets/svgs/emojie.svg";
import SendButtom from "../assets/svgs/chat-send.svg";

interface Tag {
  id: string;
  name: string;
  count: number;
  date: string;
  color: string;
  description: string;
}

interface Note {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  color: string;
}

interface TagsProps {
  onToggleSidebar?: () => void;
  sidebarCollapsed?: boolean;
}

const Tags: React.FC<TagsProps> = ({ 
  onToggleSidebar,
  sidebarCollapsed = false 
}) => {
  // Mock data for tags
  const tags: Tag[] = [
    {
      id: "1",
      name: "feedback",
      count: 2,
      date: "May 12, 2025 at 7:50 PM",
      color: "bg-orange-400",
      description: "User feedback and client reviews",
    },
    {
      id: "2", 
      name: "task",
      count: 5,
      date: "May 12, 2025 at 7:50 PM",
      color: "bg-gray-400",
      description: "Action items and follow-ups",
    },
    {
      id: "3",
      name: "design",
      count: 3,
      date: "May 12, 2025 at 7:50 PM", 
      color: "bg-gray-400",
      description: "Design critiques and suggestions",
    },
    {
      id: "4",
      name: "development",
      count: 4,
      date: "May 12, 2025 at 7:50 PM",
      color: "bg-gray-400", 
      description: "Development suggestions and functionality",
    },
    {
      id: "5",
      name: "reminder",
      count: 7,
      date: "May 12, 2025 at 7:50 PM",
      color: "bg-gray-400",
      description: "Things to remember and follow up on",
    },
    {
      id: "6",
      name: "testing", 
      count: 1,
      date: "May 12, 2025 at 7:50 PM",
      color: "bg-gray-400",
      description: "Testing observations and usability feedback",
    },
    {
      id: "7",
      name: "issue",
      count: 1,
      date: "May 12, 2025 at 7:50 PM", 
      color: "bg-gray-400",
      description: "Issues and problems encountered",
    },
  ];

  // Initialize selectedTag as null for mobile-first approach
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileScreen = window.innerWidth < 768;
      setIsMobile(isMobileScreen);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const mockNotes = [
    {
      id: "1",
      title: "Team standup",
      content: "Team standup went well today. Everyone is on track for the sprint goals. @Michael presented the new feature requirements clearly. #feedback",
      timestamp: "7:45 PM",
      color: "bg-orange-400",
    },
    {
      id: "2",
      title: "Performance review", 
      content: "Great work on the API implementation @sarah! The performance improvements are impressive. #feedback",
      timestamp: "7:45 PM",
      color: "bg-gray-400",
    },
  ];

  const filteredTags = tags.filter(
    (tag) =>
      tag.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tag.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTagSelect = useCallback((tag: Tag) => {
    setSelectedTag(tag);
  }, []);

  const handleBackToTags = useCallback(() => {
    if (isMobile) {
      setSelectedTag(null);
    }
  }, [isMobile]);

  const [showSearch, setShowSearch] = useState(false);
  
  return (
    <div className="h-full flex font-poppins relative">
      {/* Left Panel - Tags List */}
      <div
        className={`${
          isMobile ? (selectedTag ? "hidden" : "w-full") : "w-80"
        } border-r border-gray-200 flex flex-col bg-[#F5F5F6] transition-all duration-300`}
      >
        {/* Header */}
        <div className="px-3 py-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] font-medium text-gray-900">All tags</h2>
            <div className="flex items-center space-x-2">
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Search"
                onClick={() => setShowSearch(!showSearch)}
              >
                <img src={SearchIcon} alt="Search" className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Filter"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </button>
              {!isMobile && (
                <button
                  onClick={onToggleSidebar}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  title="Toggle Sidebar"
                >
                  <img src={LayoutLeft} alt="Sidebar" className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {showSearch && (
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent"
              />
              <img
                src={SearchIcon}
                alt="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              />
            </div>
          )}
        </div>

        {/* Tags List */}
        <div className="px-3 py-2 flex-1">
          <div className="overflow-y-auto space-y-2 h-full">
            {filteredTags.map((tag) => (
              <div
                key={tag.id}
                onClick={() => handleTagSelect(tag)}
                className={`p-4 rounded-xl cursor-pointer transition-colors ${
                  selectedTag?.id === tag.id
                    ? "bg-[#9AFB8B] hover:bg-[#9AFB8B]"
                    : "bg-[#FFFFFF80] hover:bg-[#FFFFFF80]"
                } ${isMobile ? "active:bg-gray-200" : ""}`}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-[14px] text-gray-900 truncate font-medium">
                        #{tag.name}
                      </h3>
                      <img
                        src={Menu}
                        alt="Menu"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                    <p className="text-[14px] mb-1">
                      {tag.description}
                    </p>
                    <p className="text-[14px] text-gray-600 mb-1">
                      {tag.count} notes
                    </p>
                    <p className="text-[12px] text-gray-600 line-clamp-2">
                      {tag.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Panel - Tag Content */}
      <div
        className={`${
          isMobile ? (selectedTag ? "w-full" : "hidden") : "flex-1"
        } flex flex-col bg-white transition-all duration-300`}
      >
        {selectedTag ? (
          <>
            {/* Tag Header */}
            <div className="border-b border-[#EDEDED] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {isMobile && (
                    <button
                      onClick={handleBackToTags}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                  )}
                  <div className="cursor-pointer">
                    <h3 className="font-medium text-[18px] leading-tight">
                      #{selectedTag.name}
                    </h3>
                    <p className="text-[14px] mt-1">
                      {selectedTag.count} notes  <span className="ml-2 text-[12px]">{selectedTag.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tag Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <p
                className="text-[18px] font-medium mb-6"
                style={{ letterSpacing: "-1px" }}
              >
                Showing {selectedTag.count} notes for #{selectedTag.name}
              </p>

              <div className="space-y-4">
                {mockNotes.map((note, index) => {
                  const noteTypes = [
                    { title: "Team standup", color: "bg-orange-400" },
                    { title: "Performance review", color: "bg-gray-400" },
                  ];

                  return (
                    <div
                      key={note.id}
                      className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            noteTypes[index]?.color || "bg-gray-400"
                          } mt-1 flex-shrink-0`}
                        ></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4
                              className="text-[14px] font-medium text-gray-900"
                              style={{ letterSpacing: "-0.5px" }}
                            >
                              {noteTypes[index]?.title || "Note"}
                            </h4>
                            <button className="relative group">
                              <img
                                src={Menu}
                                alt="Menu"
                                className="w-4 h-4 text-gray-400"
                              />
                              <div className="absolute right-0 mt-1 w-32 py-2 px-4 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                                <button className="w-full px-3 py-2 text-left text-[16px] hover:bg-white rounded-t-lg">
                                  Edit
                                </button>
                                <hr className="my-1 border-[#EDEDED]" />
                                <button className="w-full px-3 py-2 text-left text-[16px] hover:bg-white rounded-b-lg">
                                  Delete
                                </button>
                              </div>
                            </button>
                          </div>
                          <p
                            className="text-[14px] leading-relaxed"
                            style={{ letterSpacing: "-0.5px" }}
                          >
                            {note.content
                              .split(/(@\w+|#\w+)/)
                              .map((part, partIndex) =>
                                part.startsWith("@") ? (
                                  <span
                                    key={partIndex}
                                    style={{ color: "#FF7728" }}
                                    className="font-medium"
                                  >
                                    {part}
                                  </span>
                                ) : part.startsWith("#") ? (
                                  <span
                                    key={partIndex}
                                    style={{ color: "#FF7728" }}
                                    className="font-medium"
                                  >
                                    {part}
                                  </span>
                                ) : (
                                  <span key={partIndex}>{part}</span>
                                )
                              )}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            May 12, 2025 at 7:45 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Message Input */}
            <div className={`p-4 ${isMobile ? "pb-6" : ""}`}>
              <div className="space-y-4">
                <div className="relative border border-[#EDEDED] hover:border-[#8DE87F] focus-within:border-[#8DE87F] rounded-xl p-4 transition-colors">
                  <textarea
                    placeholder="Start write new note here..."
                    className={`w-full border-none outline-none resize-none ${
                      isMobile ? "min-h-[60px]" : "min-h-[80px]"
                    } placeholder:text-gray-400 text-gray-900`}
                    rows={isMobile ? 2 : 3}
                  />
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-[12px] border border-[#EDEDED] rounded-full px-4 py-1">
                        <img src={AItips} alt="AI Tips" className="w-3 h-3" />
                        <span>Ai tips</span>
                      </button>
                      <button className="flex items-center space-x-2 text-[12px] border border-[#EDEDED] rounded-full px-4 py-1">
                        <span>@Tags</span>
                      </button>
                      <button className="flex items-center space-x-2 text-[12px] border border-[#EDEDED] rounded-full px-4 py-1">
                        <span>#Keywords</span>
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <span className="text-lg">@</span>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <span className="text-lg">#</span>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <img src={Emojie} alt="Emoji" className="w-6 h-6" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <img src={SendButtom} alt="Send" className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex flex-wrap gap-2 mt-3 pt-3 ${
                    isMobile ? "text-sm" : ""
                  }`}
                >
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                    #landing page
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                    #word press
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                    #important
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                    #Meetings
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                    @sara
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
                    @jhan
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          !isMobile && (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img
                    src={TagIcon}
                    alt="Tag"
                    className="w-8 h-8 text-gray-400"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Select a tag
                </h3>
                <p className="text-gray-600">
                  Choose from your existing tags to view related notes
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Tags;
