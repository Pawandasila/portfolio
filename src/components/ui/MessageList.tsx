import React, { useRef, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Message } from "@/types";
import { Copy, ThumbsUp, ThumbsDown, Flag, Check, User } from "lucide-react";

interface MessageListProps {
  messages: Message[];
  maxWidth?: string;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  maxWidth = "max-w-3xl", // Reduced max width for better reading
}) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className={`flex-1 w-full mx-auto overflow-y-auto px-4 pt-20 pb-4 space-y-6 no-scrollbar ${maxWidth}`}
    >
      {messages.map((msg) => {
        const isUser = msg.role === "user";
        return (
          <div
            key={msg.id}
            className={`flex w-full gap-3 ${
              isUser ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            <div className="shrink-0 mt-0.5">
              {isUser ? (
                <div className="w-7 h-7 rounded-sm bg-gray-200 flex items-center justify-center text-gray-500">
                  <User size={16} />
                </div>
              ) : (
                <div className="w-7 h-7 rounded-sm bg-[#10a37f] flex items-center justify-center text-white overflow-hidden shadow-sm">
                  {/* ChatGPT-style logo or similar */}
                  <img
                    src="https://api.dicebear.com/9.x/avataaars/svg?seed=Lyndon&backgroundColor=transparent"
                    alt="AI"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              )}
            </div>

            <div
              className={`flex flex-col max-w-[88%] ${
                isUser ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`relative px-3 py-2 text-sm leading-6 ${
                  isUser
                    ? "bg-[#E8ECF2] text-gray-800 rounded-xl rounded-tr-sm"
                    : "text-gray-800 w-full pl-0 bg-transparent"
                }`}
              >
                {/* Attachments rendering remains same... */}
                {msg.attachments && msg.attachments.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2 justify-end">
                    {msg.attachments.map((att, idx) => (
                      <img
                        key={idx}
                        src={`data:${att.mimeType};base64,${att.data}`}
                        alt="attachment"
                        className="max-h-32 rounded-lg border border-gray-200"
                      />
                    ))}
                  </div>
                )}

                {isUser ? (
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                ) : (
                  <div className="prose prose-sm prose-slate max-w-none text-gray-800 leading-6">
                    {msg.text ? (
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    ) : (
                      msg.isStreaming && (
                        <div className="flex space-x-1 items-center h-4 pt-1">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons for Model */}
              {msg.role === "model" && !msg.isStreaming && msg.text && (
                <div className="flex items-center gap-1 mt-1 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* Buttons... */}
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div ref={bottomRef} className="h-4" />
    </div>
  );
};

export default MessageList;
