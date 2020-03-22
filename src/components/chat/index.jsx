import React, {
  useState,
  useRef
} from 'react';

// Components
import Chat from './Chat';
import Promotion from './Promotion';
import GoogleLogin from 'react-google-login';

const ChatContainer = props => {

  const GButtonRef = useRef(null);
  const GreetingsRef = useRef(null);

  const {
    isSignIn,
    setIsSignIn
  } = props;

  const [
    profileData,
    setProfileData
   ] = useState({});

  const GoogleSignIn = responce => {
    setProfileData(responce.profileObj);

    GButtonRef.current.style.display = 'none';
    GreetingsRef.current.style.display = 'block';
    setTimeout(() => {
      GreetingsRef.current.style.opacity = '0';
    }, 1000)

    setTimeout(() => {
      setIsSignIn(true);
    }, 2000)
    console.log(responce.profileObj);
  };

  return (
    <div className="chat-container">
      
      <Promotion />

      <div className="livechat">
      {
        isSignIn ? 
          <Chat profileData = { profileData }/> : 
          <div className="blur-block">

            <Chat />

          </div>
      }

          <div className='signin-Google'
               ref={GButtonRef} >
            <GoogleLogin  
                clientId="440508018667-u45huetcekpp65kgjh4kpmeb5e16j1bk.apps.googleusercontent.com"
                className="SingInGoogle-button"
                buttonText="Sign in with Google"
                onSuccess={ GoogleSignIn }
                onFailure={ (err) => {console.log(err)} }
                cookiePolicy={'single_host_origin'}    />
          </div>
          <div className='greetings-chat'
               ref={GreetingsRef}>
            <h2>
              Добро пожаловать в чат, <br/>
              <span>
                {profileData.name}
              </span>
            </h2>
          </div>

      </div>


    </div>
  );
};


export default ChatContainer;