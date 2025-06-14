import React from 'react';
import { Shield } from 'lucide-react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-500/30">
        <Shield className="w-5 h-5 text-cyan-400" />
      </div>
      
      <div className="flex-1 max-w-3xl">
        <div className="p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">CyberGuard is analyzing...</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};