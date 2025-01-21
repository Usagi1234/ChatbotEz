import React, { memo } from "react";
import { Message as MessageType } from "../../Types/Chat";

interface MessageProps {
  text: string;
  sender: MessageType["sender"];
}

// ใช้ memo เพื่อป้องกันการ re-render ที่ไม่จำเป็น
export const Message = memo(({ text, sender }: MessageProps) => {
  return (
    <div
      // จัดตำแหน่งข้อความตาม sender (ซ้าย/ขวา)
      className={`flex mb-4 message-animation ${
        sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {sender === "bot" && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mr-2 shadow-lg">
          <span className="text-lg">🤖</span>
        </div>
      )}
      <div
        // กำหนดสีพื้นหลังและสีข้อความตาม sender
        className={`rounded-2xl px-4 py-2 max-w-[70%] shadow-lg ${
          sender === "user"
            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-none"
            : "bg-white text-gray-800 rounded-tl-none"
        }`}
      >
        {text}
      </div>
      {sender === "user" && (
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white ml-2 shadow-lg">
          <span className="text-lg">👤</span>
        </div>
      )}
    </div>
  );
});

Message.displayName = 'Message';