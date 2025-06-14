import React from 'react';
import { MessageItem } from './MessageItem';
import { TypingIndicator } from './TypingIndicator';
import { Message } from '../types/chat';

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
}

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  isTyping,
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      
      {isTyping && <TypingIndicator />}
    </div>
  );
};