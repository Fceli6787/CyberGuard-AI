import React from 'react';
import { User, Shield } from 'lucide-react';
import { Message } from '../types/chat';

interface MessageItemProps {
  message: Message;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex gap-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
        isUser 
          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30' 
          : 'bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30'
      }`}>
        {isUser ? (
          <User className="w-5 h-5 text-blue-400" />
        ) : (
          <Shield className="w-5 h-5 text-cyan-400" />
        )}
      </div>
      
      <div className={`flex-1 max-w-3xl ${isUser ? 'flex justify-end' : ''}`}>
        <div className={`p-4 rounded-2xl ${
          isUser
            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white'
            : 'bg-gray-800/50 border border-gray-700/50 text-gray-100'
        } backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
          
          <div className={`mt-2 text-xs ${
            isUser ? 'text-blue-300' : 'text-gray-400'
          }`}>
            {message.timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
        </div>
      </div>
    </div>
  );
};