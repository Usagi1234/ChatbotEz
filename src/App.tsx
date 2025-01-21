// src/App.tsx
import React from 'react';
import { ChatApp } from './components/chatapp/ChatApp';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          ระบบแชทบอทอัตโนมัติ
        </h1>
        <ChatApp />
      </div>
    </div>
  );
}

export default App;