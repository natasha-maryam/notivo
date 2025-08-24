import React, { useState, useCallback, useEffect, useRef } from "react";
import SearchIcon from "../assets/svgs/search-refraction.svg";
import LayoutLeft from "../assets/svgs/layout-left.svg";
import AItips from "../assets/svgs/ai-tips.svg";
import Emojie from "../assets/svgs/emojie.svg";
import SendButtom from "../assets/svgs/chat-send.svg";
import Menu from "../assets/svgs/dots-vertical.svg";
import RichTextEditor from "../components/RichTextEditor";

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  color: string;
  tags: string[];
  mentions: string[];
}

interface NotesProps {
  onToggleSidebar?: () => void;
  sidebarCollapsed?: boolean;
}

const Notes: React.FC<NotesProps> = ({
  onToggleSidebar,
  sidebarCollapsed = false,
}) => {

  
  // Mock data for notes
  const notes: Note[] = [
    {
      id: "1",
      title: "Team Feedback – April 2025",
      content:
        "@Sarah showed strong initiative during the client rollout phase and handled unexpected feedback with clarity.\n\n@John Wilson needs support around planning and time estimates – missed internal review deadlines twice this month.\n\n@Giovanni improved cross-department communication and collaborated effectively with QA on the shipment module.\n\n@Emma showed leadership potential in onboarding sessions and offered to lead knowledge-sharing next quarter.\n\nPlease keep track of these developments and follow up on open coaching items by mid-May.\n\nNotes:\n• One-on-one sessions completed with 3/4 direct reports\n• Project Bravo delayed, team feels overloaded\n• Next team review scheduled: May 20\n• Add follow-up items for @John Wilson",
      date: "August 14, 2025 at 7:50 PM",
      color: "bg-green-400",
      tags: ["#feedback", "#April", "#teamhealth", "#coaching", "#milestone"],
      mentions: ["@Sarah", "@John Wilson", "@Giovanni", "@Emma"],
    },
    {
      id: "2",
      title: "Coaching session – John",
      content:
        "Today's 1-on-1 review and planning session with @John focused on time management and project estimation skills.\n\nKey discussion points:\n• Time estimation challenges on recent projects\n• Need for better planning frameworks\n• Upcoming deadline management strategies\n\nAction items:\n• Schedule follow-up session for next week\n• Provide planning template resources\n• Set up mentorship with @Sarah for project estimation\n\n#coaching #development #planning",
      date: "August 14, 2025 at 7:48 PM",
      color: "bg-orange-400",
      tags: ["#coaching", "#development", "#planning"],
      mentions: ["@John", "@Sarah"],
    },
    {
      id: "3",
      title: "Site visit summary",
      content:
        "Observations from the factory site visit conducted today. Overall operations running smoothly with some areas for improvement.\n\nKey observations:\n• Production line efficiency at 85%\n• Quality control processes working well\n• Staff morale generally positive\n• Equipment maintenance schedule needs updating\n\nRecommendations:\n• Implement new maintenance tracking system\n• Schedule quarterly efficiency reviews\n• Consider staff recognition program\n\n#site-visit #operations #quality",
      date: "August 14, 2025 at 7:45 PM",
      color: "bg-red-400",
      tags: ["#site-visit", "#operations", "#quality"],
      mentions: [],
    },
    {
      id: "4",
      title: "Client feedback – rollout",
      content:
        "Notes from call with client post-rollout phase. Overall positive feedback with some areas for improvement.\n\nPositive feedback:\n• Smooth deployment process\n• Good communication throughout\n• User training was effective\n\nAreas for improvement:\n• Response times could be faster\n• More detailed documentation needed\n• Regular check-ins would be beneficial\n\nNext steps:\n• Schedule weekly status calls\n• Prepare comprehensive user guide\n• Set up feedback collection system\n\n#client-feedback #rollout #improvement",
      date: "August 14, 2025 at 7:42 PM",
      color: "bg-gray-400",
      tags: ["#client-feedback", "#rollout", "#improvement"],
      mentions: [],
    },
    {
      id: "5",
      title: "Weekly planning recap",
      content:
        "Team goals aligned for next sprint. Planning session was productive with clear objectives set.\n\nSprint goals:\n• Complete user authentication module\n• Finalize API documentation\n• Conduct user testing sessions\n• Prepare deployment checklist\n\nTeam assignments:\n• @Mike - Authentication module\n• @Lisa - API documentation\n• @Tom - User testing coordination\n\nRisks identified:\n• Tight timeline for testing phase\n• Dependency on external API updates\n\n#planning #sprint #goals #team",
      date: "August 13, 2025 at 3:25 PM",
      color: "bg-gray-400",
      tags: ["#planning", "#sprint", "#goals", "#team"],
      mentions: ["@Mike", "@Lisa", "@Tom"],
    },
  ];

  // Initialize selectedNote as null for mobile-first approach
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMentionDropdown, setShowMentionDropdown] = useState(false);
  const [mentionPosition, setMentionPosition] = useState({ top: 0, left: 0 });
  const [textareaContent, setTextareaContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileScreen = window.innerWidth < 768;
      setIsMobile(isMobileScreen);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close mention dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMentionDropdown && textareaRef.current && !textareaRef.current.contains(event.target as Node)) {
        setShowMentionDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMentionDropdown]);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  // Group notes manually by Today and Yesterday
  const todayNotes = filteredNotes.filter((note) =>
    note.date.includes("August 14, 2025")
  );
  const yesterdayNotes = filteredNotes.filter((note) =>
    note.date.includes("August 13, 2025")
  );

  const handleNoteSelect = useCallback((note: Note) => {
    setSelectedNote(note);
  }, []);

  const handleBackToNotes = useCallback(() => {
    if (isMobile) {
      setSelectedNote(null);
    }
  }, [isMobile]);

  const [showSearch, setShowSearch] = useState(false);

  // People data for mentions
  const people = [
    { name: "Johanna Fox", id: "johanna" },
    { name: "John Wilson", id: "john_wilson" },
    { name: "Sarah Johnson", id: "sarah" },
  ];

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const cursorPosition = e.target.selectionStart;
    setTextareaContent(value);

    // Check if user typed @ and show dropdown
    const lastAtIndex = value.lastIndexOf('@', cursorPosition - 1);
    if (lastAtIndex !== -1) {
      const textAfterAt = value.substring(lastAtIndex + 1, cursorPosition);
      // Only show if there's no space after @ (still typing the mention)
      if (!textAfterAt.includes(' ') && textAfterAt.length >= 0) {
        if (textareaRef.current) {
          const rect = textareaRef.current.getBoundingClientRect();
          setMentionPosition({
            top: rect.bottom + 5,
            left: rect.left + 10
          });
          setShowMentionDropdown(true);
        }
      } else {
        setShowMentionDropdown(false);
      }
    } else {
      setShowMentionDropdown(false);
    }
  };

  const insertMention = (person: { name: string; id: string }) => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const cursorPosition = textarea.selectionStart;
      const value = textareaContent;
      
      // Find the last @ before cursor
      const lastAtIndex = value.lastIndexOf('@', cursorPosition - 1);
      if (lastAtIndex !== -1) {
        // Replace from @ to current cursor position with the mention
        const beforeAt = value.substring(0, lastAtIndex);
        const afterCursor = value.substring(cursorPosition);
        const newValue = beforeAt + `@${person.name} ` + afterCursor;
        
        setTextareaContent(newValue);
        setShowMentionDropdown(false);
        
        // Update textarea value directly and set cursor position
        textarea.value = newValue;
        const newCursorPos = beforeAt.length + `@${person.name} `.length;
        
        // Use requestAnimationFrame to ensure DOM update
        requestAnimationFrame(() => {
          textarea.setSelectionRange(newCursorPos, newCursorPos);
          textarea.focus();
        });
      }
    }
  };


  return (
    <div className="h-full flex font-poppins relative">
      {/* Left Panel - Notes List */}
      <div
        className={`${
          isMobile ? (selectedNote ? "hidden" : "w-full") : "w-80"
        } border-r border-gray-200 flex flex-col bg-[#F5F5F6] transition-all duration-300`}
      >
        {/* Header */}
        <div className="px-3 py-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] font-medium text-gray-900">All notes</h2>
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
                placeholder="Search notes..."
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

        {/* Notes List */}
        <div className="px-3 py-2 flex-1">
          <div className="overflow-y-auto space-y-2 h-full">
            {/* Today Section */}
            {todayNotes.length > 0 && (
              <div className="space-y-2">
                <div className="px-2 py-1">
                  <h3 className="text-[14px] font-medium text-gray-700">
                    Today
                  </h3>
                </div>
                {todayNotes.map((note) => (
                  <div
                    key={note.id}
                    onClick={() => handleNoteSelect(note)}
                    className={`p-4 rounded-xl cursor-pointer transition-colors ${
                      selectedNote?.id === note.id
                        ? "bg-[#9AFB8B] hover:bg-[#9AFB8B]"
                        : "bg-[#FFFFFF80] hover:bg-[#FFFFFF80]"
                    } ${isMobile ? "active:bg-gray-200" : ""}`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${note.color} mt-1 flex-shrink-0`}
                      ></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3
                            className="text-[14px] text-gray-900 truncate font-medium"
                            style={{ letterSpacing: "-0.5px" }}
                          >
                            {note.title}
                          </h3>
                          <img
                            src={Menu}
                            alt="Menu"
                            className="w-5 h-5 text-gray-400"
                          />
                        </div>
                        <p className="text-[14px] text-gray-700 line-clamp-2 mb-1">
                          {note.content}
                        </p>
                        <p className="text-[12px] text-gray-600">{note.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Yesterday Section */}
            {yesterdayNotes.length > 0 && (
              <div className="space-y-2">
                <div className="px-2 py-1">
                  <h3 className="text-[14px] font-medium text-gray-700">
                    Yesterday
                  </h3>
                </div>
                {yesterdayNotes.map((note) => (
                  <div
                    key={note.id}
                    onClick={() => handleNoteSelect(note)}
                    className={`p-4 rounded-xl cursor-pointer transition-colors ${
                      selectedNote?.id === note.id
                        ? "bg-[#9AFB8B] hover:bg-[#9AFB8B]"
                        : "bg-[#FFFFFF80] hover:bg-[#FFFFFF80]"
                    } ${isMobile ? "active:bg-gray-200" : ""}`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${note.color} mt-1 flex-shrink-0`}
                      ></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3
                            className="text-[14px] text-gray-900 truncate font-medium"
                            style={{ letterSpacing: "-0.5px" }}
                          >
                            {note.title}
                          </h3>
                          <img
                            src={Menu}
                            alt="Menu"
                            className="w-5 h-5 text-gray-400"
                          />
                        </div>
                        <p className="text-[14px] text-gray-700 line-clamp-2 mb-1">
                          {note.content}
                        </p>
                        <p className="text-[12px] text-gray-600">{note.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Middle Panel - Note Content */}
      <div
        className={`${
          isMobile ? (selectedNote ? "w-full" : "hidden") : "flex-1"
        } flex flex-col bg-white transition-all duration-300`}
      >
    
        {selectedNote ? (
          <RichTextEditor
            title={selectedNote.title}
            content={selectedNote.content}
            tags={selectedNote.tags}
            onBack={handleBackToNotes}
            isMobile={isMobile}
          />
        ) : (
          !isMobile && (
            <div className="flex justify-center items-center h-full">
              <div className={`p-4 ${isMobile ? "pb-6" : ""}`}>
                <div className="space-y-4 max-w-[900px] w-[900px]">
                  <div className="relative border border-[#EDEDED] hover:border-[#8DE87F] focus-within:border-[#8DE87F] rounded-xl p-4 transition-colors">
                    <textarea
                      ref={textareaRef}
                      placeholder="Start write new note here..."
                      value={textareaContent}
                      onChange={handleTextareaChange}
                      className={`w-full  border-none outline-none resize-none ${
                        isMobile ? "min-h-[60px]" : "min-h-[60px]"
                      } placeholder:text-gray-400 text-gray-900`}
                      rows={isMobile ? 2 : 3}
                    />

                    {/* Mention Dropdown */}
                    {showMentionDropdown && (
                      <div
                        className="fixed bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto"
                        style={{
                          top: mentionPosition.top,
                          left: mentionPosition.left,
                          minWidth: "200px",
                        }}
                      >
                        {people.map((person) => (
                          <div
                            key={person.id}
                            onClick={() => insertMention(person)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                          >
                            <span className="text-sm text-gray-900">
                              {person.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
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
                          <img
                            src={SendButtom}
                            alt="Send"
                            className="w-6 h-6"
                          />
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
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Notes;
