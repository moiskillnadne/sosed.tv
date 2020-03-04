import React from 'react';
import { GoogleLogout } from 'react-google-login'


const unAuthorized = props => {

  const {
    profileData,
    GoogleLogOut
  } = props;

  return (
    <div className="authorized-container">
      <div className="logo-profile">
        <img src={profileData.imageUrl} alt=""/>
      </div>
      <div className="name-profile">
        <h3>{profileData.name}</h3>
      </div>
      <div className="email-profile">
        <p>{profileData.email}</p>
      </div>
      <div className="signOut-profile">
      <GoogleLogout
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={GoogleLogOut}
    />
      </div>
    </div>
  );
}

export default unAuthorized;