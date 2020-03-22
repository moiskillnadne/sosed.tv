import React from 'react';

// Components
import DonateIcon from './DonateIcon';
import CommonDonate from './CommonDonate';

// Image
import ManIcon from '../../img/me.jpeg';

const DonateContainer = () => {

  const ExampleDonateList = [
    {
      name: 'Victor',
      avatar: `${ManIcon}`
    },
    {
      name: 'Gleb',
      avatar: `${ManIcon}`
    },
    {
      name: 'Savelii',
      avatar: `${ManIcon}`
    },
    {
      name: 'Alexander',
      avatar: `${ManIcon}`
    },
    {
      name: 'Oleg',
      avatar: `${ManIcon}`
    },

  ]

  return (
    <div className="donate-container">
      
      {
        ExampleDonateList.map( item => <DonateIcon personName = {item.name}
                                                   personAvatar = {item.avatar}
                                                   key = {item.name}  />)
      }

      <CommonDonate />

    </div>
  );
};


export default DonateContainer;