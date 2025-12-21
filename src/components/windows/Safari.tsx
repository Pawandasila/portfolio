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
import { useState, useEffect } from "react";

import useWindowsStore from "@/store/windows";
import Contact from "./Contact";

const Safari = () => {
  const { windows, updateWindowData } = useWindowsStore();
  const safariData = windows["safari"]?.data || {};
  const currentView = safariData.view || "chat";
  const isPageLoading = safariData.isLoading || false;

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "model",
      text: "Hi! I'm Pawan's AI assistant. 🤖✨ Ask me anything about his work, skills, or experience!",
      timestamp: Date.now(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isPageLoading) {
      const timer = setTimeout(() => {
        updateWindowData("safari", { isLoading: false });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isPageLoading, updateWindowData]);

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
      {/* Browser Loading Bar */}
      {isPageLoading && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 z-50">
          <div
            className="h-full bg-blue-500 animate-[loading_1.5s_ease-in-out_infinite]"
            style={{ width: "100%" }}
          />
        </div>
      )}

      {currentView === "contact" && !isPageLoading ? (
        <Contact />
      ) : isPageLoading ? (
        <div className="flex-1 bg-white" /> // Blank while loading
      ) : (
        <>
          <MessageList messages={messages} />
          <InputBar onSend={handleSend} isLoading={isLoading} />
        </>
      )}
    </div>
  );
};

// Header Component to access store
const SafariHeaderSearch = () => {
  const { windows } = useWindowsStore();
  const safariData = windows["safari"]?.data || {};
  const currentView = safariData.view || "chat";

  const getUrl = () => {
    switch (currentView) {
      case "contact":
        return "www.pawan.com/contact";
      default:
        return "www.pawan.com/chat";
    }
  };

  return (
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
          value={getUrl()}
          readOnly
        />
      </div>
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
  headerSearch: <SafariHeaderSearch />,
  headerRight: (
    <div className="flex items-center gap-4 mr-2">
      <Share className="icon hover:text-black" />
      <Plus className="icon hover:text-black" />
      <Copy className="icon hover:text-black" />
    </div>
  ),
});

export default safariWindow;
