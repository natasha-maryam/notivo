import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import AItips from "../assets/svgs/ai-tips.svg";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Search suggestions (kept for UI functionality)
  const searchSuggestions = [
    "Team feedback April",
    "Coaching session John",
    "@Sarah initiatives",
    "#feedback #teamhealth",
    "Client rollout phase",
    "@Johanna Fox",
    "#coaching development",
    "Product team workspace",
  ];

  // Handle search (simplified for UI only)
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Just for UI - no actual searching
  };

  // Handle filter change (simplified for UI only)
  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    // Just for UI - no actual filtering
  };

  return (
    <div className="h-full flex flex-col font-poppins">
      <div className="flex items-center">
        <p className="text-[18px] font-medium bg-transparent border-none outline-none">
          Hi Johanna needs
        </p>
        <div className="h-6 w-px bg-gray-300 mx-2"></div>
        <button className="text-gray-400 hover:text-gray-600 flex gap-1 items-center ml-4">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
          <span className="text-sm ml-1">Add tags</span>
        </button>
      </div>

      {/* AI Suggestions and Search Section */}
      <div className="flex justify-center items-center flex-col h-[700px]">
        <div className="w-full max-w-[900px] px-4 space-y-4">
          {/* AI Suggestions */}
          <div className="space-y-4 mb-8">
            <div
              className="flex items-start space-x-3 p-4 rounded-md cursor-pointer transition-colors"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #E8EFFF 0%, #FFFFFF 50%, #FFF0EF 100%)",
              }}
            >
              <div className="flex-shrink-0 mt-1">
                <img
                  src={AItips}
                  alt="AI Tips"
                  className="w-[12px] h-[12px] text-gray-600"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] font-medium text-gray-900 mb-1">
                  AI Suggestion
                </h3>
                <p className="text-[13px] text-gray-700 mb-3">
                  Log a task you completed that had the most impact on your team
                </p>
              </div>
              <button className="px-4 py-1 text-[12px] text-gray-600 border border-gray-200 rounded-full hover:text-gray-900 transition-colors">
                Use this suggestion
              </button>
            </div>

            <div
              className="flex items-start space-x-3 p-4 rounded-md cursor-pointer transition-colors"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #E8EFFF 0%, #FFFFFF 50%, #FFF0EF 100%)",
              }}
            >
              <div className="flex-shrink-0 mt-1">
                <img
                  src={AItips}
                  alt="AI Tips"
                  className="w-[12px] h-[12px] text-gray-600"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-[14px] font-medium text-gray-900 mb-1">
                  AI Suggestion
                </h3>
                <p className="text-[13px] text-gray-700 mb-3">
                  Give feedback to a team member who helped you solve a problem
                  this week.
                </p>
              </div>
              <button className="px-4 py-1 text-[12px] text-gray-600 border border-gray-200 rounded-full hover:border-[#8DE87F] hover:text-gray-900 transition-colors">
                Insert into note
              </button>
            </div>
          </div>

          {/* Search Input */}
          <SearchInput
            placeholder="Hi @Johanna Fox needs support around"
            onSearch={handleSearch}
            onFilter={handleFilter}
            showFilters={true}
            showAISearch={true}
            suggestions={searchSuggestions}
            recentSearches={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
