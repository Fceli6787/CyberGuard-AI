import React from 'react';
import { Shield, Plus, MessageSquare, Settings, Lock, AlertTriangle, Clock } from 'lucide-react';
import { Conversation } from '../types/chat';

interface SidebarProps {
  conversations: Conversation[];
  currentConversationId: string;
  onSelectConversation: (id: string) => void;
  onNewConversation: () => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  conversations,
  currentConversationId,
  onSelectConversation,
  onNewConversation,
  isOpen,
}) => {
  const securityTools = [
    { icon: Shield, label: 'Threat Analysis', color: 'text-green-400' },
    { icon: Lock, label: 'Vulnerability Scan', color: 'text-blue-400' },
    { icon: AlertTriangle, label: 'Risk Assessment', color: 'text-yellow-400' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-gray-900/95 backdrop-blur-xl border-r border-cyan-500/30 transition-all duration-300 z-20 ${
      isOpen ? 'w-80 translate-x-0' : 'w-0 -translate-x-full'
    }`}>
      <div className="flex flex-col h-full p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 p-3 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-lg border border-cyan-500/30">
          <Shield className="w-6 h-6 text-cyan-400" />
          <div>
            <h1 className="text-lg font-bold text-white">CyberGuard AI</h1>
            <p className="text-xs text-gray-400">Security Assistant</p>
          </div>
        </div>

        {/* New Chat Button */}
        <button
          onClick={onNewConversation}
          className="flex items-center gap-3 w-full p-3 mb-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 hover:from-green-500/30 hover:to-cyan-500/30 rounded-lg border border-green-500/30 hover:border-green-400/50 transition-all duration-300 text-white hover:shadow-lg hover:shadow-green-500/20"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">New Security Chat</span>
        </button>

        {/* Security Tools */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3 px-2">
            <h3 className="text-sm font-semibold text-gray-400">Security Tools</h3>
            <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/20 rounded-full border border-orange-500/30">
              <Clock className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-orange-400 font-medium">Próximamente</span>
            </div>
          </div>
          <div className="space-y-2">
            {securityTools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full p-3 rounded-lg bg-gray-800/30 border border-gray-700/30 opacity-60 cursor-not-allowed"
              >
                <div className="flex items-center gap-3">
                  <tool.icon className={`w-4 h-4 ${tool.color}`} />
                  <span className="text-gray-400 text-sm">{tool.label}</span>
                </div>
                <span className="text-xs text-orange-400 font-mono">Soon</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-hidden">
          <h3 className="text-sm font-semibold text-gray-400 mb-3 px-2">Recent Chats</h3>
          <div className="space-y-2 overflow-y-auto">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => onSelectConversation(conversation.id)}
                className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-300 group ${
                  conversation.id === currentConversationId
                    ? 'bg-gradient-to-r from-cyan-500/30 to-green-500/30 border border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                    : 'hover:bg-gray-800/50 border border-transparent hover:border-gray-700/50'
                }`}
              >
                <MessageSquare className={`w-4 h-4 ${
                  conversation.id === currentConversationId ? 'text-cyan-400' : 'text-gray-400 group-hover:text-gray-300'
                }`} />
                <div className="flex-1 text-left">
                  <p className={`text-sm font-medium truncate ${
                    conversation.id === currentConversationId ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {conversation.title}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {conversation.messages[conversation.messages.length - 1]?.content}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Settings */}
        <button className="flex items-center gap-3 w-full p-3 mt-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group border border-transparent hover:border-gray-700/50">
          <Settings className="w-4 h-4 text-gray-400 group-hover:text-gray-300 group-hover:rotate-90 transition-all duration-300" />
          <span className="text-gray-300 group-hover:text-white text-sm">Settings</span>
        </button>
      </div>
    </div>
  );
};