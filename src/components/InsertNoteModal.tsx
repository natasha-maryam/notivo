import React, { useState } from "react";
import Search from "../assets/svgs/search-refraction.svg";

interface InsertNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertNote?: (noteData: any) => void;
}

const InsertNoteModal: React.FC<InsertNoteModalProps> = ({
  isOpen,
  onClose,
  onInsertNote,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleInsertNote = (noteContent: string) => {
    if (onInsertNote) {
      onInsertNote({ content: noteContent });
    }
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 rounded-xl"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl w-full max-w-2xl mx-4 p-6 relative shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Insert Note</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src={Search} alt="Search" className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search notes by text, people, tag or date..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900 placeholder-gray-500 text-sm"
          />
        </div>

        {/* Search Results Area */}
        <div className="min-h-[200px] max-h-[400px] overflow-y-auto">
          {searchQuery ? (
            <div className="space-y-3">
              {/* Search Result Card 1 */}
              <div className="bg-[#F5F5F6] rounded-lg p-4 relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Great work on the API implementation{" "}
                      <span className="text-[#287AFF]">@sarah</span>! The
                      performance improvements are impressive.{" "}
                      <span className="text-[#287AFF]">#feedback</span>
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-6 h-6 bg-[#9AFB8B] rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleInsertNote(
                      "Great work on the API implementation @sarah! The performance improvements are impressive. #feedback"
                    )
                  }
                  className="inline-flex items-center px-3 py-1 text-[14px] font-medium text-white bg-[#333333] rounded-full hover:bg-[#333333] transition-colors"
                >
                  Insert into document
                </button>
              </div>

              {/* Search Result Card 2 */}
              <div className="bg-gray-50 rounded-lg p-4 relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="text-[#287AFF]">@Sarah</span> showed
                      strong initiative during the client rollout phase and
                      handled unexpected feedback with clarity.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleInsertNote(
                      "@Sarah showed strong initiative during the client rollout phase and handled unexpected feedback with clarity."
                    )
                  }
                  className="inline-flex items-center px-3 py-1 text-[14px] font-medium text-white bg-[#333333] rounded-full hover:bg-[#333333] transition-colors"
                >
                  Insert into document
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 min-h-[200px]">
              <div className="text-center">
                <img
                  src={Search}
                  alt="Search"
                  className="w-12 h-12 mx-auto mb-4 opacity-50"
                />
                <p className="text-sm">Start typing to search for notes...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsertNoteModal;
