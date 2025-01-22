import { useState, useCallback, useMemo } from 'react';
import { Message } from '../Types/Chat';

export const useChat = () => {
  // กำหนดข้อความเริ่มต้นจาก bot
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'สวัสดีจ้า ยินดีต้อนรับสู่ระบบแชทบอท 😊', sender: 'bot' },
    { id: 2, text: 'ฉันพร้อมช่วยเหลือคุณ มีอะไรให้ช่วยไหม?', sender: 'bot' }
  ]);
  // state สำหรับเก็บข้อความที่กำลังพิมพ์
  const [newMessage, setNewMessage] = useState('');

  // สร้างคำตอบอัตโนมัติแบบสุ่ม
  const getRandomResponse = (userMessage: string): string => {
    const responses = [
      `ขอบคุณที่บอกว่า "${userMessage}" นะ`,
      'น่าสนใจมากเลย บอกข้อมูลเพิ่มเติมได้ไหม',
      'เข้าใจแล้ว มีอะไรให้ช่วยเพิ่มเติมไหม?',
      'กำลังประมวลผลข้อความของคุณ... 🤔',
      'อยากทราบรายละเอียดเพิ่มเติม',
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  // ฟังก์ชันสำหรับจัดการการส่งข้อความ
  const handleSend = useCallback(() => {
    if (newMessage.trim()) {
      // สร้าง ID แบบไม่ซ้ำกัน
      const timestamp = Date.now();
      
      // เพิ่มข้อความของผู้ใช้
      const userMessage: Message = {
        id: timestamp,
        text: newMessage,
        sender: 'user'
      };
      
      setMessages(prevMessages => [...prevMessages, userMessage]);
      
      // จำลองการตอบกลับจาก bot
      setTimeout(() => {
        const botMessage: Message = {
          id: timestamp + 1,
          text: getRandomResponse(newMessage),
          sender: 'bot'
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }, 500);
      
      setNewMessage(''); //ข้อความหลังกดส่ง
    }
  }, [newMessage]);

  // คำนวณจำนวนข้อความของแต่ละฝ่าย (user และ bot)
  const messageCount = useMemo(() => {
    return messages.reduce((acc, curr) => {
      acc[curr.sender] = (acc[curr.sender] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [messages]);

  return {
    messages,
    newMessage,
    setNewMessage,
    handleSend,
    messageCount
  };
};