import React, {
  useState
} from 'react';

// Components
import VideoContainer from './components/media';
import DonateContainer from './components/donate';
import ChatContainer from './components/chat';
import Rules from './components/rules';

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

  const [
    isSignIn,
    setIsSignIn
  ] = useState(false);


  return (
    <div className="App">

      <VideoContainer />

      <DonateContainer />

      <ChatContainer isSignIn = { isSignIn }
                      setIsSignIn = { setIsSignIn }   />

      <Rules CloseModalFun = { CloseModalFun }/>
      
    </div>
  );
}

export default App;
