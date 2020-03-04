import React from 'react';

const DonateIcon = props => {

  const {
    personName,
    personAvatar
  } = props;

  return (
    <div className="targetsDonate">
        <div className="targetIcon_wrap">
          <div className="targetName">
            <h3>{personName}</h3>
          </div>
          <div className="targetIcon">
            <img src={personAvatar} alt=""/>
          </div>
          <div className="targetDonateToName">
            <h3>Donate to {personName}</h3>
          </div>
        </div>
      </div>
  )
}

export default DonateIcon;