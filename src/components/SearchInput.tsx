import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "../assets/svgs/search-refraction.svg";
import AItips from "../assets/svgs/ai-tips.svg";
import Emojie from "../assets/svgs/emojie.svg";
import SendButtom from "../assets/svgs/chat-send.svg";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onFilter?: (filter: string) => void;
  showFilters?: boolean;
  showAISearch?: boolean;
  className?: string;
  suggestions?: string[];
  recentSearches?: string[];
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Start searching...",
  onSearch,
  onFilter,
  className = "",
  suggestions = [],

}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showMentionDropdown, setShowMentionDropdown] = useState(false);
  const [mentionPosition, setMentionPosition] = useState({ top: 0, left: 0 });
  const searchInputRef = useRef<HTMLTextAreaElement>(null);

  // People data for mentions
  const people = [
    { name: "Johanna Fox", id: "johanna" },
    { name: "John Wilson", id: "john_wilson" },
    { name: "Sarah Johnson", id: "sarah" },
  ];

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const cursorPosition = e.target.selectionStart;
    setSearchQuery(value);
    setShowSuggestions(value.length > 0);
    onSearch?.(value);

    // Check if user typed @ and show dropdown
    const lastAtIndex = value.lastIndexOf('@', cursorPosition - 1);
    if (lastAtIndex !== -1) {
      const textAfterAt = value.substring(lastAtIndex + 1, cursorPosition);
      // Only show if there's no space after @ (still typing the mention)
      if (!textAfterAt.includes(' ') && textAfterAt.length >= 0) {
        if (searchInputRef.current) {
          const rect = searchInputRef.current.getBoundingClientRect();
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

  // Insert mention function
  const insertMention = (person: { name: string; id: string }) => {
    if (searchInputRef.current) {
      const textarea = searchInputRef.current;
      const cursorPosition = textarea.selectionStart;
      const value = searchQuery;
      
      // Find the last @ before cursor
      const lastAtIndex = value.lastIndexOf('@', cursorPosition - 1);
      if (lastAtIndex !== -1) {
        // Replace from @ to current cursor position with the mention
        const beforeAt = value.substring(0, lastAtIndex);
        const afterCursor = value.substring(cursorPosition);
        const newValue = beforeAt + `@${person.name} ` + afterCursor;
        
        setSearchQuery(newValue);
        setShowMentionDropdown(false);
        onSearch?.(newValue);
        
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

  // Handle filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    onFilter?.(filter);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    onSearch?.(suggestion);
    searchInputRef.current?.focus();
  };

  // Close suggestions and mentions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setShowMentionDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="relative border border-[#EDEDED] hover:border-[#8DE87F] focus-within:border-[#8DE87F] rounded-xl p-4 transition-colors">
        {/* Custom placeholder overlay */}
        {searchQuery === "" && (
          <div className="absolute top-4 left-4 right-4 pointer-events-none text-gray-400 min-h-[60px] flex items-start pt-0">
            <span>
              Hi <span className="text-gray-900 font-semibold">@Johanna Fox</span> needs support around
            </span>
          </div>
        )}
        <textarea
          ref={searchInputRef}
          placeholder=""
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() =>
            setShowSuggestions(searchQuery.length > 0 || suggestions.length > 0)
          }
          className="w-full border-none outline-none resize-none min-h-[60px] text-gray-900 bg-transparent relative z-10"
          rows={3}
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


        {/* Bottom buttons section - matching Notes page design */}
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
        className={`flex flex-wrap gap-2 mt-3 pt-3`}
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
  );
};

export default SearchInput;
