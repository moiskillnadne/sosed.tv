import React from 'react';
import GoogleLogin from 'react-google-login';


const unAuthorized = props => {

  const {
    GoogleSignIn
  } = props;

  return (
    <div className="unAuthorized-container">
      <GoogleLogin  
        clientId="440508018667-u45huetcekpp65kgjh4kpmeb5e16j1bk.apps.googleusercontent.com"
        className="SingInGoogle-button"
        buttonText="Sign in with Google"
        onSuccess={ GoogleSignIn }
        onFailure={ (err) => {console.log(err)} }
        cookiePolicy={'single_host_origin'}    />


      <div id="appleid-signin" 
            className="signin-button" 
            data-color="white" 
            data-border="false" 
            data-type="sign in"></div>
      </div>
  );
}

export default unAuthorized;