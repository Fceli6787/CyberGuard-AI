import React from 'react';
import { Menu, Shield, Wifi } from 'lucide-react';

interface ChatHeaderProps {
  conversationTitle: string;
  onToggleSidebar: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  conversationTitle,
  onToggleSidebar,
}) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900/90 backdrop-blur-xl border-b border-cyan-500/30">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-gray-700/50"
        >
          <Menu className="w-5 h-5 text-gray-400 hover:text-white" />
        </button>
        
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-lg border border-cyan-500/30">
            <Shield className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">{conversationTitle}</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400">Secure Connection</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30">
          <Wifi className="w-3 h-3 text-green-400" />
          <span className="text-xs text-green-400 font-medium">Online</span>
        </div>
        
        <div className="text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <span>Model:</span>
            <span className="text-cyan-400 font-mono">CyberGuard-v4</span>
          </div>
        </div>
      </div>
    </header>
  );
};