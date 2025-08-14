import React, { useState, useCallback, useEffect } from "react";
import SearchIcon from "../assets/svgs/search-refraction.svg";
import LayoutLeft from "../assets/svgs/layout-left.svg";
import UserIcon from "../assets/svgs/User.svg";
import Menu from "../assets/svgs/dots-vertical.svg";
import AItips from "../assets/svgs/ai-tips.svg";
import Emojie from "../assets/svgs/emojie.svg";
import SendButtom from "../assets/svgs/chat-send.svg";
import EditProfile from "../assets/svgs/edit-profile.svg";
import User from "../assets/svgs/chat-user.svg";
import Position from "../assets/svgs/position.svg";
import Team from "../assets/svgs/team.svg";
import StartDate from "../assets/svgs/calendar.svg";
import Birthday from "../assets/svgs/birthday.svg";
import Location from "../assets/svgs/location.svg";
import Email from "../assets/svgs/email.svg";

interface Contact {
  id: string;
  name: string;
  notes?: string;
  date?: string;
  role?: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  unread?: number;
  isOnline?: boolean;
}

interface Message {
  id: string;
  sender: "user" | "contact";
  content: string;
  timestamp: string;
  type: "text" | "image" | "file";
}

interface Chat {
  contactId: string;
  messages: Message[];
}

interface PeopleProps {
  onToggleSidebar?: () => void;
  sidebarCollapsed?: boolean;
}

const People: React.FC<PeopleProps> = ({ 
  onToggleSidebar,
  sidebarCollapsed = false 
}) => {
  // Mock data
  const contacts: Contact[] = [
    {
      id: "1",
      name: "Alex Smith",
      notes: "3 notes",
      date: "May 12, 2025 at 7:50 PM",
      role: "Project Manager",
      lastMessage:
        "@Alex, the quarterly report draft is almost complete. I need to review the financial projections section before we move forward.",
      timestamp: "7:50 PM",
      unread: 2,
      isOnline: true,
    },
    {
      id: "2",
      name: "Sarah Kate",
      notes: "5 notes",
      date: "May 12, 2025 at 7:50 PM",
      role: "Product Developer",
      lastMessage: "Let me know if you need anything else for the project.",
      timestamp: "7:50 PM",
      isOnline: true,
    },
    {
      id: "3",
      name: "Emma Taylor",
      notes: "1 note",
      date: "May 12, 2025 at 7:50 PM",
      role: "Designer",
      lastMessage: "The design mockups are ready for review.",
      timestamp: "7:50 PM",
      unread: 1,
      isOnline: false,
    },
    {
      id: "4",
      name: "Michael Johnson",
      notes: "2 notes",
      date: "May 12, 2025 at 7:50 PM",
      role: "Developer",
      lastMessage: "Can we schedule a quick call tomorrow?",
      timestamp: "7:50 PM",
      isOnline: true,
    },
    {
      id: "5",
      name: "John Wilson",
      notes: "4 notes",
      date: "May 12, 2025 at 7:50 PM",
      role: "Marketing",
      lastMessage: "Great job on the presentation today!",
      timestamp: "7:50 PM",
      isOnline: false,
    },
  ];

  // Initialize selectedContact as null for mobile-first approach
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showProfile, setShowProfile] = useState(false);
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

  const mockMessages = [
    {
      id: "1",
      sender: "contact",
      content: "@Alex, the quarterly report draft is almost complete. I need to review the financial projections section before we move forward. Can you please pay attention to the Q3 forecasts—the client wants more detailed trend analysis. Let me know if you have the latest financial reports.",
      timestamp: "7:45 PM",
      type: "text",
    },
    {
      id: "2",
      sender: "contact",  
      content: "Due to a scheduling conflict with the director, @Alex the team meeting has been moved to 10 AM tomorrow instead of 2 PM. We'll be discussing the new project timeline and resource allocation. Please confirm if you can attend—if not, send your updates in writing by 9 AM. #meeting #urgent",
      timestamp: "7:45 PM",
      type: "text",
    },
    {
      id: "3",
      sender: "contact",
      content: "The client reviewed the proposal @Alex and flagged a few sections for revision. They want more emphasis on sustainability and cost breakdowns. Let's meet tomorrow at 9 AM to go over their feedback and assign tasks. I'll send you their feedback doc shortly. #feedback #followup",
      timestamp: "7:45 PM", 
      type: "text",
    },
  ];

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.role?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactSelect = useCallback((contact: Contact) => {
    setSelectedContact(contact);
    setShowProfile(false);
  }, []);

  const handleBackToContacts = useCallback(() => {
    if (isMobile) {
      setSelectedContact(null);
    }
  }, [isMobile]);

  const handleShowProfile = useCallback(() => {
    setShowProfile(true);
  }, []);

  const handleCloseProfile = useCallback(() => {
    setShowProfile(false);
  }, []);

  const [showSearch, setShowSearch] = useState(false);
  
  return (
    <div className="h-full flex font-poppins relative">
      {/* Left Panel - Contacts List */}
      <div className={`${
        isMobile 
          ? (selectedContact ? 'hidden' : 'w-full') 
          : 'w-80'
      }  flex flex-col bg-[#F5F5F6] transition-all duration-300`}>
        
        {/* Header */}
        <div className="px-3 py-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] font-medium text-gray-900">All people</h2>
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
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
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
                placeholder="Search people..."
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

        {/* Contacts List */}
        <div className="px-3 py-2 flex-1">
          <div className="overflow-y-auto space-y-2 h-full">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => handleContactSelect(contact)}
                className={`p-4 rounded-xl cursor-pointer transition-colors ${
                  selectedContact?.id === contact.id
                    ? "bg-[#9AFB8B] hover:bg-[#9AFB8B]"
                    : "bg-[#FFFFFF80] hover:bg-[#FFFFFF80]"
                } ${isMobile ? 'active:bg-gray-200' : ''}`}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-[14px] text-gray-900 truncate font-medium">
                        {contact.name}
                      </h3>
                      <img src={Menu} alt="Menu" className="w-5 h-5 text-gray-400" />
                    </div>
                    {contact.role && (
                      <p className="text-[14px] text-gray-600 mb-1">{contact.notes}</p>
                    )}
                    <p className="text-[12px] text-gray-600 line-clamp-2">{contact.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Panel - Chat */}
      <div className={`${
        isMobile 
          ? (selectedContact ? 'w-full' : 'hidden') 
          : 'flex-1'
      } flex flex-col bg-white transition-all duration-300`}>
        {selectedContact ? (
          <>
            {/* Chat Header */}
            <div className="border-b border-[#EDEDED] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {isMobile && (
                    <button 
                      onClick={handleBackToContacts}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}
                  <div className="cursor-pointer" onClick={handleShowProfile}>
                    <h3 className="font-medium text-[18px] leading-tight">
                      {selectedContact.name}{" "}
                      <span className="text-[#33333399]">@{selectedContact.name.split(" ")[0]}</span>
                    </h3>
                    <p className="text-[14px] mt-1">
                      {selectedContact.role}{" "}
                      <span className="text-[12px] text-[#33333399]">Product Development</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <p className="text-[18px] font-medium mb-6" style={{ letterSpacing: "-1px" }}>
                Showing {selectedContact.notes} for {selectedContact.name.split(" ")[0]}
              </p>

              <div className="space-y-4">
                {mockMessages.map((message, index) => {
                  const noteTypes = [
                    { title: "Quarterly report", color: "bg-orange-400" },
                    { title: "Team meeting", color: "bg-gray-400" },
                    { title: "Client Feedback", color: "bg-gray-400" },
                  ];

                  return (
                    <div key={message.id} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm transition-shadow">
                      <div className="flex items-start space-x-3">
                        <div className={`w-3 h-3 rounded-full ${noteTypes[index]?.color || "bg-gray-400"} mt-1 flex-shrink-0`}></div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-[14px] font-medium text-gray-900" style={{ letterSpacing: "-0.5px" }}>
                              {noteTypes[index]?.title || "Note"}
                            </h4>
                            <button className="relative group">
                              <img src={Menu} alt="Menu" className="w-4 h-4 text-gray-400" />
                              <div className="absolute right-0 mt-1 w-32 py-2 px-4 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                                <button className="w-full px-3 py-2 text-left text-[16px] hover:bg-white rounded-t-lg">Edit</button>
                                <hr className="my-1 border-[#EDEDED]" />
                                <button className="w-full px-3 py-2 text-left text-[16px] hover:bg-white rounded-b-lg">Delete</button>
                              </div>
                            </button>
                          </div>
                          <p className="text-[14px] leading-relaxed" style={{ letterSpacing: "-0.5px" }}>
                            {message.content.split(/(@\w+)/).map((part, partIndex) =>
                              part.startsWith("@") ? (
                                <span key={partIndex} style={{ color: "#FF7728" }} className="font-medium">{part}</span>
                              ) : (
                                <span key={partIndex}>{part}</span>
                              )
                            )}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">May 12, 2025 at 7:45 PM</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Message Input */}
            <div className={`p-4 ${isMobile ? 'pb-6' : ''}`}>
              <div className="space-y-4">
                <div className="relative border border-[#EDEDED] hover:border-[#8DE87F] focus-within:border-[#8DE87F] rounded-xl p-4 transition-colors">
                  <textarea
                    placeholder="Start write new note here..."
                    className={`w-full border-none outline-none resize-none ${
                      isMobile ? 'min-h-[60px]' : 'min-h-[80px]'
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
                <div className={`flex flex-wrap gap-2 mt-3 pt-3 ${isMobile ? 'text-sm' : ''}`}>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">#landing page</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">#word press</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">#important</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">#Meetings</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">@sara</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-200 transition-colors">@jhan</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          !isMobile && (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={UserIcon} alt="User" className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                <p className="text-gray-600">Choose from your existing conversations or start a new one</p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Right Panel - Profile */}
      {showProfile && selectedContact && (
        <>
          {isMobile && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleCloseProfile} />
          )}
          <div className={`${
            isMobile 
              ? 'fixed inset-x-4 top-16 bottom-4 z-50 rounded-xl shadow-2xl overflow-hidden' 
              : 'w-80'
          } bg-white flex flex-col transition-all duration-300`}>
            
            {/* Profile Header */}
            <div className="p-4 mb-[-10px]">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-medium text-gray-900">Profile Details</h3>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <img src={EditProfile} alt="Edit" className="w-[18px] h-[18px]" />
                  </button>
                  <button onClick={handleCloseProfile} className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <svg className="w-[16px] h-[16px] text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-2">
              <div className="flex items-center space-x-3 -mt-[2]">
                <div className="w-12 h-12 bg-[#FF7728] rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  A
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[16px] font-medium text-gray-900 truncate">Alex</h4>
                  <p className="text-[14px] text-gray-600">Project manager</p>
                  <p className="text-[12px] text-[#33333399]">Nickname: Alex</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Profile Details */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#F5F5F6] rounded-lg p-2">
                    <img src={User} alt="User" className="w-[16px] h-[16px] text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 font-medium">Full Name</p>
                    <p className="text-[14px] text-gray-900">Alexander Smith</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-[#F5F5F6] rounded-lg p-2">
                    <img src={Position} alt="position" className="w-[16px] h-[16px] text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 font-medium">Position</p>
                    <p className="text-[14px] text-gray-900">Product Manager</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-[#F5F5F6] rounded-lg p-2">
                    <img src={Team} alt="team" className="w-[16px] h-[16px] text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 font-medium">Team</p>
                    <p className="text-[14px] text-gray-900">Product Development</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-[#F5F5F6] rounded-lg p-2">
                    <img src={StartDate} alt="start date" className="w-[16px] h-[16px] text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 font-medium">Start Date</p>
                    <p className="text-[14px] text-gray-900">March 15, 2023</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-[#F5F5F6] rounded-lg p-2">
                    <img src={Birthday} alt="birthday" className="w-[16px] h-[16px] text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 font-medium">Birthday</p>
                    <p className="text-[14px] text-gray-900">August 22, 1990</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-[#F5F5F6] rounded-lg p-2">
                    <img src={Email} alt="email" className="w-[16px] h-[16px] text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 font-medium">Contact</p>
                    <p className="text-[14px] text-gray-900">alex.smith@company.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-[#F5F5F6] rounded-lg p-2">
                    <img src={Location} alt="location" className="w-[16px] h-[16px] text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 font-medium">Location</p>
                    <p className="text-[14px] text-gray-900">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F6] rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <img src={AItips} alt="AI Tips" className="w-4 h-4" />
                  <h5 className="text-[14px] font-medium text-gray-900">AI Insights</h5>
                </div>
                <p className="text-[12px] text-gray-700 leading-relaxed">
                  Regular check-ins show positive engagement. Consider discussing career development opportunities.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default People;
