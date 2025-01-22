export interface Message {
    id: number; //Id ข้อความ
    text: string; //ตัวข้อความ
    sender: 'user' | 'bot'; //ใครเป็นคนส่ง
  }