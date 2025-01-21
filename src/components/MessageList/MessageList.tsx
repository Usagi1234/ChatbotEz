import React from 'react';
import { Message } from '../Message/Message';
import { Message as MessageType } from '../../Types/Chat';

interface MessageListProps {
  messages: MessageType[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="space-y-4 flex flex-col">
      {messages.map((message) => (
        <div 
          key={message.id}
          className="animate-fade-in"
        >
          <Message
            text={message.text}
            sender={message.sender}
          />
        </div>
      ))}
      {messages.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          ยังไม่มีข้อความ เริ่มพิมพ์เพื่อสนทนา
        </div>
      )}
    </div>
  );
};