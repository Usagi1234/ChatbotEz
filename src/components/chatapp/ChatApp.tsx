import React from 'react';
import { MessageList } from '../MessageList/MessageList';
import { MessageInput } from '../MessageInput/MessageInput';
import { useChat } from '../../hooks/UseChat';

export const ChatApp: React.FC = () => {
  const {
    messages,
    newMessage,
    setNewMessage,
    handleSend,
    messageCount
  } = useChat();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-800">แชทบอท</h2>
            <div className="text-sm text-gray-600">
              ข้อความ: ผู้ใช้ ({messageCount.user || 0}), บอท ({messageCount.bot || 0})
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex flex-col h-[600px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-white p-6">
            <MessageList messages={messages} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <MessageInput
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onSend={handleSend}
            />
          </div>
        </div>
      </div>
    </div>
  );
};