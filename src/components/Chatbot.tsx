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
      text: "Hey there! 👋✨ I'm Pawan's AI buddy and his biggest fan! 🤖💜 I know everything about him - his incredible projects, amazing skills,  and why he's such an awesome developer! 🚀\n\nWhat would you like to discover about Pawan today? I'm super excited to share his story! 😊🌟",
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
          style={{ maxHeight: "200px" }}
        />
      );

      lastIndex = imageRegex.lastIndex;
    }

    // Add remaining text after the last image
    if (lastIndex < text.length) {
      parts.push(
        <span key={`text-${lastIndex}`}>{text.slice(lastIndex)}</span>
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
    if (
      message.includes("name") ||
      message.includes("full name") ||
      message.includes("called")
    ) {
      return "His name is Pawan Dasila! 😊 That's his full name - simple, memorable, and perfect for a future tech star! He's currently a 4th-year Computer Science student who's already making waves in the tech world! 🌟";
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
          height: isMinimized ? "70px" : "600px",
        }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
          height: {
            type: "spring",
            stiffness: 200,
            damping: 15,
            mass: 0.5,
          },
        }}
        className="fixed bottom-4 right-4 w-96 md:w-96 sm:w-[calc(100vw-2rem)] sm:right-4 sm:left-4 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 rounded-2xl shadow-2xl z-50 border border-emerald-500/20 backdrop-blur-lg overflow-hidden"
        style={{
          maxHeight: isMinimized ? "70px" : "calc(100vh - 80px)",
        }}
      >
        {/* Enhanced Header with Glassmorphism */}
        <div className="bg-gradient-to-r from-emerald-500/90 to-blue-500/90 backdrop-blur-sm p-4 flex justify-between items-center rounded-t-2xl relative">
          {/* Animated background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 opacity-50">
            <motion.div
              className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]"
              animate={{ x: [-100, 400] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          <div className="flex items-center space-x-3 relative z-10">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-lg">🤖</span>
            </motion.div>
            <div>
              <h3 className="text-white font-bold text-sm drop-shadow-sm">
                Pawan's AI Assistant
              </h3>
              <div className="flex items-center space-x-1">
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full shadow-sm"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity 
                  }}
                />
                <p className="text-emerald-100 text-xs font-medium">Online & Ready!</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2 relative z-10">
            <motion.button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:text-emerald-200 transition-colors p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </motion.button>
            <motion.button
              onClick={onClose}
              className="text-white hover:text-red-300 transition-colors p-2 rounded-full hover:bg-red-500/10 backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <X size={16} />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "530px",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    mass: 0.5,
                  },
                  opacity: {
                    duration: 0.3,
                    delay: 0.1,
                  },
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                  opacity: {
                    duration: 0.2,
                  },
                },
              }}
              className="flex flex-col overflow-hidden"
            >
              {/* Enhanced Messages Area */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-slate-800/30 to-slate-900/50 backdrop-blur-sm custom-scrollbar">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.05,
                    }}
                    className={`flex ${
                      message.isBot ? "justify-start items-start" : "justify-end"
                    }`}
                  >
                    {/* Bot avatar for bot messages - positioned before message */}
                    {message.isBot && (
                      <motion.div 
                        className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full flex items-center justify-center text-sm mr-3 mt-1 shadow-lg border-2 border-emerald-300/30 flex-shrink-0"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        🤖
                      </motion.div>
                    )}
                    
                    <motion.div
                      className={`max-w-[80%] rounded-2xl p-4 relative ${
                        message.isBot
                          ? "bg-gradient-to-br from-slate-700/90 to-slate-800/90 text-white border border-emerald-500/20"
                          : "bg-gradient-to-br from-emerald-500 to-blue-500 text-white shadow-lg"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Message bubble tail */}
                      <div className={`absolute top-3 ${
                        message.isBot 
                          ? "-left-2 border-r-8 border-r-slate-700 border-t-8 border-t-transparent border-b-8 border-b-transparent" 
                          : "-right-2 border-l-8 border-l-emerald-500 border-t-8 border-t-transparent border-b-8 border-b-transparent"
                      }`} />
                      
                      <div className="text-sm leading-relaxed">
                        {message.isBot
                          ? renderMessageContent(message.text)
                          : message.text}
                      </div>
                      <div className={`text-xs mt-2 opacity-70 ${
                        message.isBot ? "text-emerald-300" : "text-blue-100"
                      }`}>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
                
                {/* Enhanced Loading Animation */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex justify-start items-start"
                  >
                    {/* Bot avatar for loading */}
                    <motion.div 
                      className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full flex items-center justify-center text-sm mr-3 mt-1 shadow-lg border-2 border-emerald-300/30 flex-shrink-0"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                        scale: { duration: 1, repeat: Infinity }
                      }}
                    >
                      🤖
                    </motion.div>
                    
                    <div className="bg-gradient-to-br from-slate-700/90 to-slate-800/90 rounded-2xl p-4 border border-emerald-500/20 relative">
                      {/* Message bubble tail */}
                      <div className="absolute top-3 -left-2 border-r-8 border-r-slate-700 border-t-8 border-t-transparent border-b-8 border-b-transparent" />
                      
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-emerald-400 rounded-full"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-emerald-300 text-sm font-medium">
                          Thinking...
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
              {/* Enhanced Input Area */}
              <div className="p-4 border-t border-slate-700/50 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-b-2xl">
                <div className="flex space-x-3 items-end">
                  <div className="flex-1 relative">
                    <motion.input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me about Pawan! 😊"
                      className="w-full bg-slate-700/50 text-white rounded-xl px-4 py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all border border-slate-600/50 backdrop-blur-sm"
                      disabled={isLoading}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    {/* Input glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: inputValue ? 0.3 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <motion.button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl px-4 py-3 hover:from-emerald-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-w-[48px] flex items-center justify-center shadow-lg disabled:shadow-none relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <motion.div
                      animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
                    >
                      <Send size={16} />
                    </motion.div>
                  </motion.button>
                </div>
                
                {/* Quick suggestion pills */}
                {messages.length === 1 && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-wrap gap-2 mt-3"
                  >
                    {["Projects", "Skills", "Experience"].map((suggestion) => (
                      <motion.button
                        key={suggestion}
                        onClick={() => setInputValue(`Tell me about Pawan's ${suggestion.toLowerCase()}`)}
                        className="px-3 py-1.5 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </motion.div>
    </AnimatePresence>
  );
};

export default Chatbot;
