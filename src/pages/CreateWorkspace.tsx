import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import editor icons
import Bold from "../assets/svgs/editor/Bold.svg";
import Italic from "../assets/svgs/editor/Italic.svg";
import Underline from "../assets/svgs/editor/Underline.svg";
import Strikethrough from "../assets/svgs/editor/Strikethrough.svg";
import TextColor from "../assets/svgs/editor/TextColor.svg";
import AlignLeft from "../assets/svgs/editor/AlignLeft.svg";
import center from "../assets/svgs/editor/center.svg";
import AlignRight from "../assets/svgs/editor/AlignRight.svg";
import JustifyText from "../assets/svgs/editor/JustifyText.svg";
import Link from "../assets/svgs/editor/Link.svg";
import Image from "../assets/svgs/editor/Image.svg";
import Microphone from "../assets/svgs/editor/Microphone.svg";
import alternate_email from "../assets/svgs/editor/alternate_email.svg";
import Export from "../assets/svgs/download4.svg";
import EmojieIcon from "../assets/svgs/emojie.svg";
import Stars from "../assets/svgs/starts.svg"
import Pen from "../assets/svgs/pen-tool-02.svg"
import Write from "../assets/svgs/write.svg"
import Search from "../assets/svgs/search-refraction.svg";

const CreateWorkspace = () => {
  const navigate = useNavigate();
  const [workspaceTitle, setWorkspaceTitle] = useState("Untitled workspace");
  const [status, setStatus] = useState("Draft");

  const handleBack = () => {
    navigate("/workspaces");
  };

  const handleSave = () => {
    // Save logic would go here
    navigate("/workspaces");
  };

  const handleExportPDF = () => {
    // Export PDF logic would go here
    console.log("Export PDF");
  };

  return (
    <div className="h-full flex font-poppins bg-white py-4 pl-6 pr-4">
      {/* Main Content */}
      <div className="flex-1 flex flex-col mr-4">
      {/* Header */}
      <div className=" flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={workspaceTitle}
              onChange={(e) => setWorkspaceTitle(e.target.value)}
              className="text-xl font-medium text-gray-900 bg-transparent border-none outline-none focus:ring-0"
            />
          </div>

          <div className="flex items-center space-x-3">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-[#8DE87F] hover:border-[#8DE87F]"
            >
              <option value="Draft">Draft</option>
              <option value="Final">Final</option>
            </select>

            <button
              onClick={handleExportPDF}
              className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-xl"
            >
              <img
                src={Export}
                alt="Export PDF"
                className="w-[18px] h-[18px] mr-1"
              />
              Export PDF
            </button>

            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#333333] text-white rounded-xl hover:bg-[#333333] text-sm font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Editor Toolbar */}
      <div className="border-b border-gray-200 px-6 py-3 flex-shrink-0">
        <div className="flex items-center space-x-4">
          {/* Heading Dropdown */}
          <select className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>Heading 1</option>
            <option>Heading 2</option>
            <option>Heading 3</option>
            <option>Paragraph</option>
          </select>

          <div className="w-px h-6 bg-gray-300"></div>

          {/* Text Formatting */}
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={Bold} alt="Bold" className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={Italic} alt="Italic" className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={Underline} alt="Underline" className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <img
                src={Strikethrough}
                alt="Strikethrough"
                className="w-5 h-5"
              />
            </button>
          </div>

          <div className="w-px h-6 bg-gray-300"></div>

          {/* Text Color */}
          <button className="p-2 hover:bg-gray-100 rounded">
            <img src={TextColor} alt="Text Color" className="w-5 h-5" />
          </button>

          <div className="w-px h-6 bg-gray-300"></div>

          <button className="p-2 hover:bg-gray-100 rounded">
            <img src={Link} alt="Link" className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <img src={Image} alt="Image" className="w-5 h-5" />
          </button>

          <div className="w-px h-6 bg-gray-300"></div>

          {/* Alignment */}
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={AlignLeft} alt="Align Left" className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={center} alt="Center" className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={AlignRight} alt="Align Right" className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={JustifyText} alt="Justify" className="w-5 h-5" />
            </button>
          </div>

          <div className="w-px h-6 bg-gray-300"></div>

          {/* Insert Options */}
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={alternate_email} alt="Mention" className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={EmojieIcon} alt="Voice" className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <img src={Microphone} alt="Voice" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Editor Content Area */}
      <div className="flex-1 px-6 py-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Content Blocks */}
          <div className="space-y-2">
            {/* First Block */}
            <div className="group relative">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-400">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="min-h-[40px] text-[#333333]">
                Start writing your document...
              </div>
            </div>

            {/* Second Block */}
            <div className="group relative">
              <div className="flex items-center space-x-2 mb-1">
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-400">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <h2 className="text-2xl font-medium text-gray-400 min-h-[40px]">
                Enter heading
              </h2>
            </div>

            {/* Third Block */}
            <div className="group relative">
              <div className="flex items-center space-x-2 mb-1">
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-400">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-gray-400 min-h-[40px]">Start typing</div>
            </div>

            {/* Quote Block */}
            <div className="group relative">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-400">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="border-l-4 border-blue-400 bg-blue-50 p-4 italic text-gray-600 h-[130px]">
                Add a quote
              </div>
            </div>

            {/* AI Generated Block */}
            <div className="group relative">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-400">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-400">
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
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </button>
                  <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-400">
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
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="m2 17 10 5 10-5" />
                      <path d="m2 12 10 5 10-5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">AI Generated</span>
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                    Summarize selected notes
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  [AI-Generated Content]: Summarize selected notes applied to
                  selected content...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="border-t border-gray-200 px-6 py-3 flex-shrink-0">
        <div className="flex items-center justify-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm">
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
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            Paragraph
          </button>
          <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm">
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
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            Heading
          </button>
          <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm">
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Quote
          </button>
          <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm">
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
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
            Divider
          </button>
          <button className="flex items-center space-x-2 px-3 py-1 bg-black text-white rounded-lg hover:bg-gray-800 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2v20l7-7H5l7 7z" />
            </svg>
            Insert note
          </button>

          {/* AI Assistant Circle */}
          <div className="ml-4">
            <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="m2 17 10 5 10-5" />
                <path d="m2 12 10 5 10-5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content Container Closing */}
      </div>

      {/* Right Sidebar */}
      <div className="flex-shrink-0 flex flex-col items-center justify-end self-end mb-8">
        <div className="w-12 flex flex-col items-center py-3 px-1 space-y-3 border border-gray-200 rounded-full bg-white">
          {/* AI/Magic Tool */}
          <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <img src={Stars} alt="AI/Magic Tool" className="w-[28px] h-[28px]" />
          </button>

          {/* Edit/Pencil Tool */}
          <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <img src={Pen} alt="Edit/Pencil Tool" className="w-[24px] h-[24px]" />
             
          </button>

          {/* Comments/Chat Tool */}
          <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <img src={Write} alt="Comments/Chat Tool" className="w-[24px] h-[24px]" />
          </button>

          {/* Search Tool */}
          <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <img src={Search} alt="Search Tool" className="w-[24px] h-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkspace;
