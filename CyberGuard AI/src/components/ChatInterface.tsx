import React, { useState, useRef, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { Message, Conversation } from '../types/chat';

export const ChatInterface: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      title: 'Security Analysis',
      messages: [
        {
          id: '1',
          content: 'Hello! I\'m your cybersecurity AI assistant. How can I help you secure your systems today?',
          sender: 'ai',
          timestamp: new Date(Date.now() - 300000),
        }
      ],
      createdAt: new Date(Date.now() - 300000),
    }
  ]);
  
  const [currentConversationId, setCurrentConversationId] = useState('1');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentConversation = conversations.find(c => c.id === currentConversationId);
  const messages = currentConversation?.messages || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || !currentConversation) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    // Add user message
    setConversations(prev =>
      prev.map(conv =>
        conv.id === currentConversationId
          ? { ...conv, messages: [...conv.messages, userMessage] }
          : conv
      )
    );

    // Simulate AI response
    setIsTyping(true);
    
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(content),
        sender: 'ai',
        timestamp: new Date(),
      };

      setConversations(prev =>
        prev.map(conv =>
          conv.id === currentConversationId
            ? { ...conv, messages: [...conv.messages, aiMessage] }
            : conv
        )
      );
      
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const responses = [
      "I've analyzed your request from a cybersecurity perspective. Here are my recommendations for enhancing your security posture...",
      "Based on current threat intelligence, I suggest implementing these security measures to protect against potential vulnerabilities...",
      "Your security query requires a multi-layered approach. Let me break down the threat vectors and mitigation strategies...",
      "I've identified several security considerations for your use case. Here's a comprehensive analysis with actionable steps...",
      "From a cybersecurity standpoint, this presents interesting challenges. I recommend the following security protocols..."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const createNewConversation = () => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: 'New Security Chat',
      messages: [
        {
          id: Date.now().toString(),
          content: 'Hello! I\'m ready to assist you with your cybersecurity needs. What would you like to discuss?',
          sender: 'ai',
          timestamp: new Date(),
        }
      ],
      createdAt: new Date(),
    };

    setConversations(prev => [...prev, newConversation]);
    setCurrentConversationId(newConversation.id);
  };

  return (
    <div className="flex h-screen relative z-10">
      <Sidebar
        conversations={conversations}
        currentConversationId={currentConversationId}
        onSelectConversation={setCurrentConversationId}
        onNewConversation={createNewConversation}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarOpen ? 'ml-80' : 'ml-0'
      }`}>
        <ChatHeader 
          conversationTitle={currentConversation?.title || 'CyberGuard AI'}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <div className="flex-1 overflow-hidden">
          <MessageList 
            messages={messages}
            isTyping={isTyping}
          />
          <div ref={messagesEndRef} />
        </div>
        
        <MessageInput 
          onSendMessage={handleSendMessage}
          disabled={isTyping}
        />
      </div>
    </div>
  );
};