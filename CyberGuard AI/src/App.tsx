import React from 'react';
import { ChatInterface } from './components/ChatInterface';
import { MatrixBackground } from './components/MatrixBackground';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <MatrixBackground />
      <ChatInterface />
    </div>
  );
}

export default App;