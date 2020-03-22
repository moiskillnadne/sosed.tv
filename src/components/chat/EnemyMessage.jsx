import React from 'react';
import MeIcon from '../../img/me.jpeg';

const EnemyMessage = props => {

  const {
    text,
    name
  } = props.data

  return(
    <div className="enemy-message-block">
      <div>
        <img src={MeIcon} alt=""/>
        <p className="name-mess">{name}</p>
        <p className="text-mess">{text}</p>
      </div>
    </div>
  )
}

export default EnemyMessage;