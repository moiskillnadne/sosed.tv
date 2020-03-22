import React from 'react';
import MeIcon from '../../img/me.jpeg';

const MyMessage = props => {

  const {
    text,
    name
  } = props.data

  return(
    <div className="my-message-block">
      <div>
        <p className="text-mess">{text}</p>
        <p className="name-mess">{name}</p>
        <img src={MeIcon} alt=""/>
      </div>
    </div>
  )
}

export default MyMessage;