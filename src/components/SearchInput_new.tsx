import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "../assets/svgs/search-refraction.svg";
import AItips from "../assets/svgs/ai-tips.svg";
import Emojie from "../assets/svgs/emojie.svg";

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
  showFilters = true,
  showAISearch = true,
  className = "",
  suggestions = [],
  recentSearches = []
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const searchInputRef = useRef<HTMLTextAreaElement>(null);

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(value.length > 0);
    onSearch?.(value);
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

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="relative border border-[#EDEDED] hover:border-[#8DE87F] focus-within:border-[#8DE87F] rounded-xl p-4 transition-colors">
        <textarea
          ref={searchInputRef}
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => setShowSuggestions(searchQuery.length > 0 || suggestions.length > 0)}
          className="w-full border-none outline-none resize-none min-h-[60px] placeholder:text-gray-400 text-gray-900"
          rows={3}
        />

        {/* Search Suggestions Dropdown */}
        {showSuggestions && (suggestions.length > 0 || searchQuery) && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            {searchQuery &&
              suggestions
                .filter(suggestion => suggestion.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((suggestion, index) => (
                  <div
                    key={`suggestion-${index}`}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100"
                  >
                    <img src={SearchIcon} alt="Search" className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-900">{suggestion}</span>
                  </div>
                ))}
            
            {!searchQuery && recentSearches.length > 0 && (
              <>
                <div className="px-4 py-2 bg-gray-50 text-xs font-medium text-gray-600 uppercase">
                  Recent Searches
                </div>
                {recentSearches.map((search, index) => (
                  <div
                    key={`recent-${index}`}
                    onClick={() => handleSuggestionClick(search)}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center space-x-3"
                  >
                    <span className="text-gray-400">↗</span>
                    <span className="text-sm text-gray-700">{search}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {/* Bottom buttons section - matching Notes page design */}
        <div className="flex items-center justify-between mb-1">
          {showFilters && (
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleFilterChange("all")}
                className={`flex items-center space-x-2 text-[12px] border rounded-full px-4 py-1 transition-colors ${
                  activeFilter === "all" 
                    ? "border-[#8DE87F] bg-[#8DE87F] text-gray-900" 
                    : "border-[#EDEDED] hover:border-[#8DE87F]"
                }`}
              >
                <span>All types</span>
              </button>
              <button 
                onClick={() => handleFilterChange("notes")}
                className={`flex items-center space-x-2 text-[12px] border rounded-full px-4 py-1 transition-colors ${
                  activeFilter === "notes" 
                    ? "border-[#8DE87F] bg-[#8DE87F] text-gray-900" 
                    : "border-[#EDEDED] hover:border-[#8DE87F]"
                }`}
              >
                <span>@Notes</span>
              </button>
              <button 
                onClick={() => handleFilterChange("people")}
                className={`flex items-center space-x-2 text-[12px] border rounded-full px-4 py-1 transition-colors ${
                  activeFilter === "people" 
                    ? "border-[#8DE87F] bg-[#8DE87F] text-gray-900" 
                    : "border-[#EDEDED] hover:border-[#8DE87F]"
                }`}
              >
                <span>#People</span>
              </button>
            </div>
          )}
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
            {showAISearch && (
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <img src={AItips} alt="AI Search" className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
