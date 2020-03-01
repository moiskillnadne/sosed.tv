import React from 'react';
import './App.css';

// Components
import VideoContainer from './components/media';
import DonateContainer from './components/donate';
import ChatContainer from './components/chat';
import Rules from './components/rules';
import SignUp from './components/singup'

function App() {

  const CloseModalFun = e => {

    const modal = e.target;
  
    if(modal.classList.value === 'default-modal') {
      modal.style.opacity = '0';
      setTimeout( () => {
        modal.style.display = 'none';
      }, 700)
    }
  }


  return (
    <div className="App">

      <VideoContainer />

      <DonateContainer />

      <ChatContainer />

      <Rules CloseModalFun = { CloseModalFun }/>

      <SignUp CloseModalFun = { CloseModalFun } />
      
    </div>
  );
}

export default App;
