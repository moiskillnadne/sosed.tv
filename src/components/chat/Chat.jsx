import React, {
  useState
} from 'react';

// Components
import MyMessage from './MyMessage';
import EnemyMessage from './EnemyMessage';


import {
  MultiLanguage
} from '../../helpers/Multilang';

const Chat = props => {

  const testMessageList = [
    {
      text: 'Привет всем!',
      name: 'Victor Ryabkov',
      isMe: true,
    },
    {
      text: 'Всем привет!',
      name: 'SomeOne',
      isMe: false,
    },
    {
      text: 'Дороучече!',
      name: 'Someone else',
      isMe: false,
    },
    {
      text: 'Пошумим',
      name: 'Victor Ryabkov',
      isMe: true,
    },
  ]

  const [
    messageList,
    // eslint-disable-next-line no-unused-vars
    setMessageList
  ] = useState(testMessageList)

  return(
    <div className="livechat-wrapper">
      <div className="livechat-header">
        <p>{MultiLanguage.rus.chat}</p>
      </div>
      <div className="livechat-dialogue">
        <div>
          <div className="message-list-block">
            {
              messageList.map( (item, index) => {
                if(item.isMe) {
                  return <MyMessage data = { item } key = { index }/>
                }

                return <EnemyMessage data = { item } key = { index }/> 

              })
            }
          </div>
          <div className="message-input-block">
            <div>
              {
                props.profileData ?
                  <img src={props.profileData.icon} alt="" className="profile-icon"/> : 
                  <img src='' alt=''/>

              }
            </div>
            <div>
              <input type="text" 
                     className="message-input"
                     placeholder="Введите ваше сообщение"  />
            </div>
            <div>
              <button className="send-message-button">
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;