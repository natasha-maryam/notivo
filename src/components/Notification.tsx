import React from "react";
import Cross from "../assets/svgs/into.svg"

interface NotificationProps {
  type: "success" | "error" | "warning" | null;
  message: string;
  onClose: () => void;
  unsaved?: boolean;
}

const Notification: React.FC<NotificationProps> = ({ type, message, onClose, unsaved }) => {
  if (!type) return null;
  return (
    <div
      className={`mx-6 mt-4 mb-2 px-4 py-2 flex items-center justify-between h-[32px] text-[12px] ${
        type === "success"
          ? "bg-[#008844]/10 text-[#008844]"
          : type === "warning"
          ? "bg-[#E16B16]/10 text-[#E16B16] "
          : "bg-[#E6483D]/10 text-[#E6483D]"
      }`}
    >
      <div className="flex items-center">
        <span className="font-medium">{message}</span>
      </div>
      <button
        onClick={onClose}
        className={`ml-4`}
        disabled={type === 'warning' && unsaved}
        style={type === 'warning' && unsaved ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
      >
        <img src={Cross} alt="close" />
      </button>
    </div>
  );
};

export default Notification;
