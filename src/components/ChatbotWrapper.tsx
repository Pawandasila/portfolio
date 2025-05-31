'use client';

import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import FloatingRobot from './FloatingRobot';
import Chatbot from './Chatbot';
import { useLoading } from '@/contexts/LoadingContext';

const ChatbotWrapper: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { isLoading } = useLoading();

  useEffect(() => {
    // Show robot only after loading is complete
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000); // Small delay after loading completes

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const handleRobotClick = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <FloatingRobot onClick={handleRobotClick} isActive={isChatOpen} />
      <Chatbot isOpen={isChatOpen} onClose={handleChatClose} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1f2937',
            color: '#fff',
            borderRadius: '12px',
            border: '1px solid #6366f1',
          },
        }}
      />
    </>
  );
};

export default ChatbotWrapper;
