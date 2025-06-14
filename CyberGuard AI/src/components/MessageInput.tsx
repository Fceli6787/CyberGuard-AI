import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  disabled = false,
}) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 bg-gray-900/90 backdrop-blur-xl border-t border-cyan-500/30">
      <div className="max-w-4xl mx-auto">
        <div className="relative flex items-end gap-3 p-4 bg-gray-800/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
          <button className="p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
            <Paperclip className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
          </button>

          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about cybersecurity, threats, or vulnerabilities..."
            className="flex-1 bg-transparent text-white placeholder-gray-400 resize-none min-h-[24px] max-h-32 focus:outline-none"
            rows={1}
            disabled={disabled}
          />

          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
              <Mic className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
            </button>
            
            <button
              onClick={handleSend}
              disabled={!message.trim() || disabled}
              className={`p-2 rounded-lg transition-all duration-300 ${
                message.trim() && !disabled
                  ? 'bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white shadow-lg hover:shadow-cyan-500/25'
                  : 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-3 px-2">
          <p className="text-xs text-gray-500">
            Press Enter to send, Shift+Enter for new line
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>🔒 Encrypted</span>
            <span>⚡ Real-time Analysis</span>
          </div>
        </div>
      </div>
    </div>
  );
};