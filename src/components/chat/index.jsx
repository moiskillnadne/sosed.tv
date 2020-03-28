import React, {
  useState,
  useRef
} from 'react';

// Components
import Chat from './Chat';
import Promotion from './Promotion';
import GoogleLogin from 'react-google-login';
import VKICON from '../../img/vk.svg';

// Helper
import {
  SetProfileDataHelper
} from '../../helpers/SetProfileDataHelper'

const ChatContainer = props => {
// Get props
  const {
    isSignIn,
    setIsSignIn
  } = props;

// React Refs for components
  const GButtonRef = useRef(null);
  const VKButtonRef = useRef(null);
  const GreetingsRef = useRef(null);

// It is VK OPEN.API connect
  const VK = window.VK;

// State for profile data
  const [
    profileData,
    setProfileData
   ] = useState({});


  const GoogleSignIn = responce => {

    SetProfileDataHelper(setProfileData, responce, 'google');

    GButtonRef.current.style.display = 'none';
    VKButtonRef.current.style.display = 'none';
    GreetingsRef.current.style.display = 'block';
    setTimeout(() => {
      GreetingsRef.current.style.opacity = '0';
    }, 1000)

    setTimeout(() => {
      setIsSignIn(true);
    }, 2000)
  };

  const VkSignIn = () => {
    VK.Auth.login( data => {
      console.log(data.session)
      SetProfileDataHelper(setProfileData, data.session, 'vk');
    })

    GButtonRef.current.style.display = 'none';
    VKButtonRef.current.style.display = 'none';
    GreetingsRef.current.style.display = 'block';
    setTimeout(() => {
      GreetingsRef.current.style.opacity = '0';
    }, 1000)

    setTimeout(() => {
      setIsSignIn(true);
    }, 2000)
    
  }

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
          <div className="signin-vk"
               ref={VKButtonRef}>
            <button onClick={VkSignIn}>
              <div className="vk-auth-icon">
                <img src={VKICON} alt=""/>
              </div>
              <span>Sign in with VK</span>
            </button>
          </div>
          <div className='greetings-chat'
               ref={GreetingsRef}>
            <h2>
              Добро пожаловать в чат, <br/>
              <span>
                {`${profileData.name} ${profileData.surname}`}
              </span>
            </h2>
          </div>

      </div>


    </div>
  );
};


export default ChatContainer;