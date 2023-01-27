import React, { useContext } from 'react'
import "./Chat.css"
import dots from "../../assets/imgs/dots.svg"
import Messages from '../Messages/Messages'
import Input from '../Input/Input'
import { ChatContext } from '../../context/ChatContext'

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className='chat-info'>
        <span>{data.user?.displayName}</span>
        <div className='chat-icons'>
          <img src={dots} alt="" />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat