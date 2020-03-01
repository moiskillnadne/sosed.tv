import React from 'react';

// Image
import ManIcon from '../../img/boy.svg';

const DonateContainer = () => {
  return (
    <div className="donate-container">
      <div className="targetsDonate">
        <div className="targetIcon_wrap">
          <div className="targetNumber">
            <h3>1</h3>
            <h3>Donate to 1</h3>
          </div>
          <div className="targetIcon">
            <img src={ManIcon} alt=""/>
          </div>
        </div>
      </div>
      <div className="targetsDonate">
        <div className="targetIcon_wrap">
          <div className="targetNumber">
            <h3>2</h3>
            <h3>Donate to 2</h3>
          </div>
          <div className="targetIcon">
            <img src={ManIcon} alt=""/>
          </div>
        </div>
      </div>
      <div className="targetsDonate">
        <div className="targetIcon_wrap">
          <div className="targetNumber">
            <h3>3</h3>
            <h3>Donate to 3</h3>
          </div>
          <div className="targetIcon">
            <img src={ManIcon} alt=""/>
          </div>
        </div>
      </div>
      <div className="targetsDonate">
        <div className="targetIcon_wrap">
          <div className="targetNumber">
            <h3>4</h3>
            <h3>Donate to 4</h3>
          </div>
          <div className="targetIcon">
            <img src={ManIcon} alt=""/>
          </div>
        </div>
      </div>
      <div className="targetsDonate">
        <div className="targetIcon_wrap">
          <div className="targetNumber">
            <h3>5</h3>
            <h3>Donate to 5</h3>
          </div>
          <div className="targetIcon">
            <img src={ManIcon} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DonateContainer;