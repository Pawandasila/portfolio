import React, { useState, useRef, useEffect } from "react";
import { Plus, Paperclip, Mic, ArrowUp, X } from "lucide-react";

interface InputBarProps {
  onSend: (text: string) => void;
  isLoading: boolean;
}

const InputBar: React.FC<InputBarProps> = ({ onSend, isLoading }) => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  }, [text]);

  const handleSend = () => {
    if (text.trim() && !isLoading) {
      onSend(text);
      setText("");
      if (textareaRef.current) textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full mx-auto max-w-3xl px-4">
      <div className="relative flex flex-col w-full p-3 bg-white border border-gray-200 shadow-sm rounded-xl focus-within:ring-1 focus-within:ring-black/10 focus-within:border-black/10 transition-all">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message Pawan's AI..."
          className="w-full max-h-[200px] py-1 px-1 bg-transparent border-none focus:ring-0 resize-none text-sm text-gray-800 placeholder-gray-400 outline-none leading-relaxed"
          rows={1}
          style={{ minHeight: "24px" }}
        />
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2 text-gray-400">
            {/* Add icons here if needed, keeping it clean for now */}
          </div>
          <button
            onClick={handleSend}
            disabled={isLoading || !text.trim()}
            className={`p-1.5 rounded-md transition-all ${
              text.trim() && !isLoading
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-transparent text-gray-200 cursor-not-allowed"
            }`}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
      <p className="text-center text-[10px] text-gray-400 mt-2">
        AI can make mistakes. Check important info.
      </p>
    </div>
  );
};

export default InputBar;
