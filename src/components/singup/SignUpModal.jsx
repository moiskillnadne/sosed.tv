import React from 'react';
import GoogleLogin from 'react-google-login';

// Lang
import {
  MultiLanguage
} from '../../helpers/Multilang';


const SignUpModal = props => {

  const {
    SignUpModalRef,
    CloseModalFun
  } = props;



  return (
    <div className="default-modal"
         ref = { SignUpModalRef }
         onClick = { CloseModalFun }    >
      <div className="signup-wrap default-innerModal">
        <h1>
        {MultiLanguage.rus.buttons.signUp}
        </h1>
        <div className="signup">
          <GoogleLogin  
            clientId="440508018667-u45huetcekpp65kgjh4kpmeb5e16j1bk.apps.googleusercontent.com"
            className="SingInGoogle-button"
            buttonText="Sign in with Google"
            onSuccess={ (responce) => {console.log(responce)} }
            onFailure={ (err) => {console.log(err)} }
            cookiePolicy={'single_host_origin'}    />


          <div id="appleid-signin" 
               className="signin-button" 
               data-color="black" 
               data-border="false" 
               data-type="sign in"></div>
        </div>
      </div>
    </div>
  )
}

export default SignUpModal;