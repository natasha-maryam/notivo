import React, { useState, useRef, useEffect } from 'react';
import { SketchPicker } from 'react-color';

// Import editor icons
import BoldIcon from '../assets/svgs/editor/Bold.svg';
import ItalicIcon from '../assets/svgs/editor/Italic.svg';
import UnderlineIcon from '../assets/svgs/editor/Underline.svg';
import StrikethroughIcon from '../assets/svgs/editor/Strikethrough.svg';
import TextColorIcon from '../assets/svgs/editor/TextColor.svg';
import LinkIcon from '../assets/svgs/editor/Link.svg';
import ImageIcon from '../assets/svgs/editor/Image.svg';
import AlignLeftIcon from '../assets/svgs/editor/AlignLeft.svg';
import AlignCenterIcon from '../assets/svgs/editor/center.svg';
import AlignRightIcon from '../assets/svgs/editor/AlignRight.svg';
import JustifyIcon from '../assets/svgs/editor/JustifyText.svg';
import MicrophoneIcon from '../assets/svgs/editor/Microphone.svg';

// Import other icons
import EmojieIcon from '../assets/svgs/emojie.svg';
import AlternateEmailIcon from '../assets/svgs/editor/alternate_email.svg';
import Notification from './Notification';

interface RichTextEditorProps {
  title: string;
  content: string;
  tags: string[];
  onSave?: (title: string, content: string) => void;
  onBack?: () => void;
  isMobile?: boolean;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  title,
  content,
  tags,
  onBack,
  isMobile = false
}) => {
  const [selectedHeading, setSelectedHeading] = useState('Paragraph');
  const [editorTitle, setEditorTitle] = useState(title);
  const [editorContent, setEditorContent] = useState(content);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const contentRef = useRef<HTMLDivElement>(null);
    // Notification state
  const [notification, setNotification] = useState<{ type: 'success' | 'error' | 'warning' | null; message: string }>({ type: null, message: '' });
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    const handleSave = (title: string, content: string) => {

      // Show notification on save
      setNotification({ type: 'success', message: 'Note saved successfully' });
      setHasUnsavedChanges(false);
      setTimeout(() => {
        setNotification({ type: null, message: '' });
      }, 3000);
      // Here you would typically send the updated content to your backend
    
  };


  // Function to parse text and highlight mentions and tags
  const parseTextWithMentionsAndTags = (text: string) => {
    const mentionColors: { [key: string]: string } = {
      '@Sarah': '#FF7728', // Orange
      '@John Wilson': '#8B5CF6', // Purple
      '@John': '#8B5CF6', // Purple (same person)
      '@Giovanni': '#10B981', // Green
      '@Emma': '#F59E0B', // Amber
      '@Mike': '#3B82F6', // Blue
      '@Lisa': '#EC4899', // Pink
      '@Tom': '#6366F1', // Indigo
    };

    return text.split(/(@\w+(?:\s+\w+)?|#\w+)/).map((part, index) => {
      if (part.match(/@\w+(?:\s+\w+)?/)) {
        const color = mentionColors[part] || '#FF7728';
        return (
          <span
            key={index}
            style={{ color: color }}
            className="font-medium"
          >
            {part}
          </span>
        );
      } else if (part.match(/#\w+/)) {
        return (
          <span
            key={index}
            style={{ color: "#4A90E2" }}
            className="font-medium"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Function to render content with mentions and hashtags
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      if (line.trim() === '') {
        return <br key={index} />;
      }
      
      if (line.startsWith('Notes:')) {
        return (
          <div key={index} className="mt-6">
            <p className="font-medium mb-2">{line}</p>
          </div>
        );
      }
      
      if (line.startsWith('•')) {
        return (
          <ul key={index} className="list-disc list-inside space-y-1 ml-4">
            <li>{parseTextWithMentionsAndTags(line.substring(1).trim())}</li>
          </ul>
        );
      }
      
      if (line.endsWith(':')) {
        return (
          <p key={index} className="font-medium mb-2">
            {parseTextWithMentionsAndTags(line)}
          </p>
        );
      }
      
      return (
        <p key={index}>
          {parseTextWithMentionsAndTags(line)}
        </p>
      );
    });
  };

  // Format functions
  const formatText = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (contentRef.current) {
      contentRef.current.focus();
    }
  };

  // Color picker function
  const applyColor = (color: string) => {
    formatText('foreColor', color);
    setCurrentColor(color);
    setShowColorPicker(false);
  };

  const applyHeading = (headingType: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();
      
      if (selectedText || contentRef.current) {
        let tag = 'p';
        let className = '';
        
        switch (headingType) {
          case 'Headline 1':
            tag = 'h1';
            className = 'text-4xl font-bold';
            break;
          case 'Headline 2':
            tag = 'h2';
            className = 'text-3xl font-semibold';
            break;
          case 'Headline 3':
            tag = 'h3';
            className = 'text-2xl font-medium';
            break;
          default:
            tag = 'p';
            className = 'text-base';
        }
        
        formatText('formatBlock', tag);
      }
    }
    setSelectedHeading(headingType);
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Editor Header */}
      <div className="border-b border-[#EDEDED] px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {isMobile && onBack && (
              <button
                onClick={onBack}
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
            <input
              type="text"
              value={editorTitle}
              onChange={(e) => setEditorTitle(e.target.value)}
              className="text-[18px] font-medium bg-transparent border-none outline-none"
            />
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
          <button
            onClick={()=> handleSave(editorTitle, editorContent)}
            className="px-4 py-2 bg-[#ECECED] text-black rounded-lg  transition-colors hover:bg-[#ECECED]"
          >
            Save
          </button>
        </div>
      </div>

      {/* Editor Toolbar */}
      <div className="border-b border-[#EDEDED] px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {/* Heading Dropdown */}
            <select
              className="text-sm border-none bg-transparent outline-none text-gray-700 font-medium cursor-pointer"
              value={selectedHeading}
              onChange={(e) => applyHeading(e.target.value)}
            >
              <option value="Paragraph">Paragraph</option>
              <option value="Headline 1">Headline 1</option>
              <option value="Headline 2">Headline 2</option>
              <option value="Headline 3">Headline 3</option>
            </select>

            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            {/* Formatting Buttons */}
            <button
              className="p-2 rounded"
              onClick={() => formatText("bold")}
              title="Bold"
            >
              <img src={BoldIcon} alt="Bold" className="w-5 h-5" />
            </button>

            <button
              className="p-2 rounded"
              onClick={() => formatText("italic")}
              title="Italic"
            >
              <img src={ItalicIcon} alt="Italic" className="w-5 h-5" />
            </button>

            <button
              className="p-2 rounded"
              onClick={() => formatText("underline")}
              title="Underline"
            >
              <img src={UnderlineIcon} alt="Underline" className="w-5 h-5" />
            </button>

            <button
              className="p-2 rounded"
              onClick={() => formatText("strikeThrough")}
              title="Strikethrough"
            >
              <img
                src={StrikethroughIcon}
                alt="Strikethrough"
                className="w-5 h-5"
              />
            </button>

            {/* Color Picker */}
            <div className="relative">
              <button
                className="p-2 rounded flex items-center"
                onClick={() => setShowColorPicker(!showColorPicker)}
                title="Text Color"
              >
                <div
                  className="w-4 h-4 mr-2 rounded border border-gray-300"
                  style={{ backgroundColor: currentColor }}
                ></div>
                <img src={TextColorIcon} alt="Text Color" className="w-5 h-5" />
              </button>

              {showColorPicker && (
                <div className="absolute top-12 right-0 z-50">
                  <div
                    className="fixed inset-0 bg-transparent"
                    onClick={() => setShowColorPicker(false)}
                  ></div>
                  <SketchPicker
                    color={currentColor}
                    onChange={(color) => applyColor(color.hex)}
                    presetColors={[
                      "#FF7728",
                      "#8B5CF6",
                      "#10B981",
                      "#EF4444",
                      "#3B82F6",
                      "#F59E0B",
                      "#8B5CF6",
                      "#000000",
                    ]}
                  />
                </div>
              )}
            </div>

            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            {/* Link and Image */}
            <button
              className="p-2 rounded"
              onClick={() =>
                formatText("createLink", prompt("Enter URL:") || "")
              }
              title="Insert Link"
            >
              <img src={LinkIcon} alt="Link" className="w-5 h-5" />
            </button>

            <button
              className="p-2 rounded"
              onClick={() => {
                const url = prompt("Enter image URL:");
                if (url) formatText("insertImage", url);
              }}
              title="Insert Image"
            >
              <img src={ImageIcon} alt="Image" className="w-5 h-5" />
            </button>

            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            {/* Alignment Buttons */}
            <button
              className="p-2 rounded"
              onClick={() => formatText("justifyLeft")}
              title="Align Left"
            >
              <img src={AlignLeftIcon} alt="Align Left" className="w-5 h-5" />
            </button>

            <button
              className="p-2 rounded"
              onClick={() => formatText("justifyCenter")}
              title="Align Center"
            >
              <img
                src={AlignCenterIcon}
                alt="Align Center"
                className="w-5 h-5"
              />
            </button>

            <button
              className="p-2 rounded"
              onClick={() => formatText("justifyRight")}
              title="Align Right"
            >
              <img src={AlignRightIcon} alt="Align Right" className="w-5 h-5" />
            </button>

            <button
              className="p-2 rounded"
              onClick={() => formatText("justifyFull")}
              title="Justify"
            >
              <img src={JustifyIcon} alt="Justify" className="w-5 h-5" />
            </button>

            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            {/* Special Characters */}
            <button
              className="p-2 rounded"
              onClick={() => {
                const selection = window.getSelection();
                if (selection && contentRef.current) {
                  const range = selection.getRangeAt(0);
                  const textNode = document.createTextNode("@");
                  range.insertNode(textNode);
                  range.setStartAfter(textNode);
                  range.setEndAfter(textNode);
                  selection.removeAllRanges();
                  selection.addRange(range);
                }
              }}
              title="Insert @"
            >
              <img src={AlternateEmailIcon} alt="@" className="w-5 h-5" />
            </button>

            <button
              className="p-2 rounded"
              onClick={() => {
                const selection = window.getSelection();
                if (selection && contentRef.current) {
                  const range = selection.getRangeAt(0);
                  const textNode = document.createTextNode("#");
                  range.insertNode(textNode);
                  range.setStartAfter(textNode);
                  range.setEndAfter(textNode);
                  selection.removeAllRanges();
                  selection.addRange(range);
                }
              }}
              title="Insert #"
            >
              <span className="text-lg font-medium text-[#969696]">#</span>
            </button>

            <button
              className="p-2 rounded"
              onClick={() => {
                // Emoji picker placeholder - you might want to implement a proper emoji picker
                const emoji = prompt("Enter emoji:");
                if (emoji) {
                  const selection = window.getSelection();
                  if (selection && contentRef.current) {
                    const range = selection.getRangeAt(0);
                    const textNode = document.createTextNode(emoji);
                    range.insertNode(textNode);
                  }
                }
              }}
              title="Insert Emoji"
            >
              <img src={EmojieIcon} alt="Emoji" className="w-5 h-5" />
            </button>

            <button
              className="p-2 rounded"
              onClick={() => {
                // Voice input placeholder - would need actual voice recognition implementation
                alert("Voice input feature would be implemented here");
              }}
              title="Voice Input"
            >
              <img src={MicrophoneIcon} alt="Microphone" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Place Notification below toolbar, above editor body */}
      <Notification
        type={notification.type}
        message={notification.message}
        onClose={() => setNotification({ type: null, message: "" })}
        unsaved={hasUnsavedChanges}
      />

      {/* Editor Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto">
        <div className="max-w-4xl">
          {/* Document Title */}
          <h1
            className="text-[32px] font-bold text-gray-900 mb-8 outline-none"
            contentEditable
            style={{ letterSpacing: "-3%" }}
            suppressContentEditableWarning={true}
          >
            {title}
          </h1>

          {/* Document Content */}
          <div
            ref={contentRef}
            className="text-[14px] leading-snug text-gray-800 space-y-1 min-h-[400px] outline-none"
            contentEditable
            suppressContentEditableWarning={true}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {renderContent(content)}

            {/* Tags at bottom of content */}
            <div className="mt-8 pt-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{ color: "#4A90E2" }}
                    className="font-medium cursor-pointer hover:underline"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex items-center space-x-3 py-2">
                <span className="text-gray-500">Type here</span>
                <div className="flex items-center space-x-4 ml-auto">
                  <button className="border border-gray-300 rounded-full px-2 py-1 text-sm">
                    @Tags
                  </button>
                  <button className="border border-gray-300 rounded-full px-2 py-1 text-sm">
                    #Keywords
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
