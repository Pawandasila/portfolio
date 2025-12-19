import WindowsWrapper from "@/hoc/WindowsWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

import { Message } from "@/types";
import { streamResponse } from "@/services/gemini";
import InputBar from "../ui/InputBar";
import MessageList from "../ui/MessageList";
import { useState } from "react";

const Safari = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "model",
      text: "Hi! I'm Pawan's AI assistant. 🤖✨ Ask me anything about his work, skills, or experience!",
      timestamp: Date.now(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (text: string) => {
    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setIsLoading(true);

    try {
      const aiMsgId = (Date.now() + 1).toString();
      const newAiMsg: Message = {
        id: aiMsgId,
        role: "model",
        text: "",
        timestamp: Date.now(),
        isStreaming: true,
      };

      setMessages((prev) => [...prev, newAiMsg]);

      await streamResponse([...messages, newUserMsg], text, (chunk) => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMsgId ? { ...msg, text: chunk } : msg
          )
        );
      });

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMsgId ? { ...msg, isStreaming: false } : msg
        )
      );
    } catch (error) {
      console.error(error);
      const errorMsg: Message = {
        id: Date.now().toString(),
        role: "model",
        text: "Sorry, I encountered an error. Please try again! 😓",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white h-full relative">
      <MessageList messages={messages} />
      <InputBar onSend={handleSend} isLoading={isLoading} />
    </div>
  );
};

const safariWindow = WindowsWrapper(Safari, "safari", {
  isLight: true,
  headerLeft: (
    <div className="flex items-center gap-2">
      <PanelLeft className="icon ml-6" />
      <div className="flex items-center gap-1 ml-4">
        <ChevronLeft className="icon opacity-40" />
        <ChevronRight className="icon opacity-40" />
      </div>
    </div>
  ),
  headerSearch: (
    <div
      className="flex items-center gap-3 w-full justify-center"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <ShieldHalf className="icon p-1! text-gray-400" />
      <div className="window-search max-w-[400px]">
        <Search className="search-icon opacity-50" />
        <input
          type="text"
          placeholder="Search or enter website name"
          defaultValue="www.pawan.com"
          readOnly
        />
      </div>
    </div>
  ),
  headerRight: (
    <div className="flex items-center gap-4 mr-2">
      <Share className="icon hover:text-black" />
      <Plus className="icon hover:text-black" />
      <Copy className="icon hover:text-black" />
    </div>
  ),
});

export default safariWindow;
