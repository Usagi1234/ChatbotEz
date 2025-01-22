import React from "react";

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  value,
  onChange,
  onSend,
}) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={(e) => e.key === "Enter" && onSend()}
        placeholder="พิมพ์ข้อความ..."
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        onClick={onSend}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        ส่ง
      </button>
    </div>
  );
};
