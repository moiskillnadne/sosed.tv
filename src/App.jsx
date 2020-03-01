import React from 'react';
import './App.css';

// Components
import VideoContainer from './components/media';
import DonateContainer from './components/donate';
import ChatContainer from './components/chat';

function App() {
  return (
    <div className="App">

      <VideoContainer />

      <DonateContainer />

      <ChatContainer />
      
    </div>
  );
}

export default App;
