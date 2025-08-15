import React from "react";
import Menu from "../assets/svgs/dots-vertical.svg";

export interface SearchResult {
  id: string;
  type: "note" | "person" | "workspace" | "tag";
  title: string;
  content?: string;
  date?: string;
  author?: string;
  tags?: string[];
  color?: string;
  mentions?: string[];
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  onResultClick?: (result: SearchResult) => void;
  loading?: boolean;
  emptyMessage?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  query,
  onResultClick,
  loading = false,
  emptyMessage = "No results found"
}) => {
  const getResultIcon = (type: string) => {
    switch (type) {
      case "note":
        return "📝";
      case "person":
        return "👤";
      case "workspace":
        return "🏢";
      case "tag":
        return "#";
      default:
        return "📄";
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">{part}</mark>
      ) : (
        part
      )
    );
  };

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 bg-white border border-gray-200 rounded-xl animate-pulse">
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-gray-300 rounded-full mt-1"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
                <div className="h-3 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (results.length === 0 && query) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-[16px] font-medium text-gray-900 mb-2">{emptyMessage}</h3>
        <p className="text-[14px] text-gray-600 mb-4">
          Try adjusting your search or filters to find what you're looking for.
        </p>
        <div className="space-y-2 text-[12px] text-gray-500">
          <p>Search tips:</p>
          <ul className="text-left inline-block space-y-1">
            <li>• Use @username to find people</li>
            <li>• Use #tag to find tagged content</li>
            <li>• Try different keywords</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {query && results.length > 0 && (
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-medium text-gray-900">
            {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
          </h3>
          <button className="text-[12px] text-gray-500 hover:text-gray-700 transition-colors">
            Sort by relevance
          </button>
        </div>
      )}

      <div className="space-y-3">
        {results.map((result) => (
          <div
            key={result.id}
            onClick={() => onResultClick?.(result)}
            className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#8DE87F] cursor-pointer transition-colors group"
          >
            <div className="flex items-start space-x-3">
              {result.color ? (
                <div className={`w-3 h-3 rounded-full ${result.color} mt-1 flex-shrink-0`}></div>
              ) : (
                <span className="text-lg flex-shrink-0 mt-0.5">{getResultIcon(result.type)}</span>
              )}
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-[14px] font-medium text-gray-900 group-hover:text-gray-800">
                      {highlightText(result.title, query)}
                    </h4>
                    <span className="text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded-full uppercase font-medium">
                      {result.type}
                    </span>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <img src={Menu} alt="Menu" className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
                
                {result.content && (
                  <p className="text-[13px] text-gray-700 mb-2 line-clamp-2">
                    {highlightText(result.content, query)}
                  </p>
                )}
                
                {result.author && (
                  <p className="text-[12px] text-gray-500 mb-2">by {result.author}</p>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {result.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[11px] px-2 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        {highlightText(tag, query)}
                      </span>
                    ))}
                    {result.mentions?.map((mention, index) => (
                      <span
                        key={`mention-${index}`}
                        className="text-[11px] px-2 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
                      >
                        {highlightText(mention, query)}
                      </span>
                    ))}
                  </div>
                  {result.date && (
                    <span className="text-[11px] text-gray-500">{result.date}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
