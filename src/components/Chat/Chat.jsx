import React from 'react'
import "./Chat.css"
import dots from "../../assets/imgs/dots.svg"
import Messages from '../Messages/Messages'
import Input from '../Input/Input'

const Chat = () => {
  return (
    <div className="chat">
      <div className='chat-info'>
        <span>Aous</span>
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