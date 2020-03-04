import React, {
  useState
} from 'react';

// Lang
import {
  MultiLanguage
} from '../../helpers/Multilang';

// Components 
import UnAuthorized from './unAuthorized';
import Authorized from './authorized';


const SignUpModal = props => {

  const {
    SignUpModalRef,
    CloseModalFun,
    isSignIn,
    setIsSignIn
  } = props;

  const [
    profileData,
    setProfileData
  ] = useState({});


  const GoogleSignIn = responce => {
    setProfileData(responce.profileObj)
    setIsSignIn(true);
    console.log(responce.profileObj)
  };

  const GoogleLogOut = () => {
    setIsSignIn(false);
    setProfileData({});
  }



  return (
    <div className="default-modal"
         ref = { SignUpModalRef }
         onClick = { CloseModalFun }    >
      <div className="signup-wrap default-innerModal">
        <h1>
          {MultiLanguage.rus.buttons.signUp}
        </h1>
        
      {
        isSignIn ? 
          <Authorized profileData = {profileData}
                      GoogleLogOut = {GoogleLogOut}   /> :
          <UnAuthorized GoogleSignIn = {GoogleSignIn}/>
      }

      </div>
    </div>
  )
}

export default SignUpModal;