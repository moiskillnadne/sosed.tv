import React, {
  useState
} from 'react';
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

  const [
    isSignIn,
    setIsSignIn
  ] = useState(false);


  return (
    <div className="App">

      <VideoContainer />

      <DonateContainer />

      <ChatContainer />

      <Rules CloseModalFun = { CloseModalFun }/>

      <SignUp CloseModalFun = { CloseModalFun }
              isSignIn = {isSignIn}
              setIsSignIn = {setIsSignIn} />
      
    </div>
  );
}

export default App;
