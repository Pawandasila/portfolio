"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Minimize2, Maximize2 } from "lucide-react";
import { toast } from "react-hot-toast";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey there! 👋 I'm Pawan's AI buddy and his biggest fan! I know everything about him - his projects, skills, favorite cricket player, favorite singer, and why he's an amazing developer! What would you like to know? 😊✨",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  // Function to render message content with image support
  const renderMessageContent = (text: string) => {
    // Check for markdown image syntax: ![alt](url)
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = imageRegex.exec(text)) !== null) {
      // Add text before the image
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${lastIndex}`}>
            {text.slice(lastIndex, match.index)}
          </span>
        );
      }

      // Add the image
      parts.push(
        <img
          key={`img-${match.index}`}
          src={match[2]}
          alt={match[1]}
          className="mt-2 rounded-lg max-w-full h-auto"
          style={{ maxHeight: '200px' }}
        />
      );

      lastIndex = imageRegex.lastIndex;
    }

    // Add remaining text after the last image
    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${lastIndex}`}>
          {text.slice(lastIndex)}
        </span>
      );
    }

    return parts.length > 0 ? parts : text;
  };

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        console.warn("API returned error:", data.error);
      }

      return (
        data.response ||
        "Sorry, I couldn't process that right now. Try asking me about Pawan's projects or experience! 😊"
      );
    } catch (error) {
      console.error("Error calling chatbot API:", error);
      return getFallbackResponse(userMessage);
    }
  };

  const getFallbackResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Name questions
    if (message.includes('name') || message.includes('full name') || message.includes('called')) {
      return "His name is Pawan Dasila! 😊 That's his full name - simple, memorable, and perfect for a future tech star! He's currently a 3rd-year Computer Science student who's already making waves in the tech world! 🌟";
    }

    if (message.includes("project") || message.includes("work")) {
      return "Oh, you want to know about Pawan Dasila's amazing projects? 🚀 He's built some incredible stuff! Like FlashAI with 1000+ users, YogaLife wellness platform, and InterviewAce with AI-powered interviews! Which one sounds most interesting to you? 😊";
    }

    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech")
    ) {
      return "Pawan is a tech wizard! 🧙‍♂️ He's mastered React, Next.js, Node.js, MongoDB, and even AI/ML integration! Plus he's got that sweet BharatPe internship experience. Want to know more about any specific tech? 💻✨";
    }

    if (
      message.includes("education") ||
      message.includes("university") ||
      message.includes("study")
    ) {
      return "He's studying Computer Science at Graphic Era Hill University with a solid 7.89 CGPA! 📚 Smart cookie, right? He went to St. Lawrence School in Haldwani before that. Education goals! 🎓";
    }

    if (
      message.includes("experience") ||
      message.includes("internship") ||
      message.includes("bharatpe")
    ) {
      return "Oh yes! Pawan worked as a Full Stack Web Developer Intern at BharatPe! 💼 He built awesome MERN stack applications and RESTful APIs. Pretty cool for a student, don't you think? 😎";
    }

    if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("hire")
    ) {
      return "Looking to connect with Pawan? Smart choice! 🤝 Check out his amazing portfolio - you can find all his contact info and project links right here on this website! He's always excited about new opportunities! 🌟";
    }

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hey there, new friend! 👋 I'm so excited to tell you about Pawan! He's this amazing developer who builds AI-powered applications and has already worked at BharatPe! What would you like to know about him? 🤖✨";
    }

    return "Hmm, let me think about that! 🤔 I'm here to chat about Pawan and his awesome journey as a developer! Try asking me about his projects, skills, education, or experience - I've got tons of fun stories to share! 😄💫";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const botResponse = await generateBotResponse(userMessage.text);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again! 😅");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25,
          mass: 0.8
        }}
        className="fixed bottom-20 right-4 w-80 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl shadow-2xl z-50 border border-purple-500/30 backdrop-blur-sm"
        style={{
          height: isMinimized ? '70px' : '500px'
        }}
      >
        {/* Fixed Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center rounded-t-2xl relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-sm">🤖</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">
                Pawan's AI Buddy
              </h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-purple-200 text-xs">Online & Ready!</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:text-purple-200 transition-colors p-1 rounded-full hover:bg-purple-500/20"
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>
            <button
              onClick={onClose}
              className="text-white hover:text-red-300 transition-colors p-1 rounded-full hover:bg-red-500/20"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Chat Content */}
        {!isMinimized && (
          <div className="flex flex-col h-[430px] overflow-hidden">
            {/* Scrollable Messages Area - No heavy animations */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-800/50 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-700">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl p-3 ${
                      message.isBot
                        ? "bg-gray-700 text-white"
                        : "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    }`}
                  >
                    <div className="text-sm leading-relaxed">
                      {message.isBot ? renderMessageContent(message.text) : message.text}
                    </div>
                    <div className={`text-xs mt-1 opacity-70 ${
                      message.isBot ? "text-gray-300" : "text-purple-100"
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 rounded-2xl p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Fixed Input Area */}
            <div className="p-4 border-t border-gray-600 bg-gray-800 rounded-b-2xl">
              <div className="flex space-x-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Pawan! 😊"
                  className="flex-1 bg-gray-700 text-white rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all border border-gray-600"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl px-4 py-3 hover:from-purple-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Chatbot;
