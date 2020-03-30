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

// Auth animation
   const AuthAnim = () => {
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


  const GoogleSignIn = responce => {

    // Save profile data in state
    SetProfileDataHelper(setProfileData, responce, 'google');

    // Start animation for unlock chat window
    AuthAnim();
  };

  const VkSignIn = async () => {
    await VK.Auth.login( data => {
      console.log(data)
      if(data.session) {
        console.log(data)
        SetProfileDataHelper(setProfileData, data.session.user, 'vk');

        if( data.status === 'connected' ) {
          VK.Api.call('users.get', {
            user_ids: data.session.user.id,
            fields: ["photo_200", "photo_50"],
            v: '5.73',
          }, (res) => {
            SetProfileDataHelper(setProfileData, res.response[0], 'vk');
            AuthAnim();
          })
        }
      }
      console.log(data)
    });

    
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