import React from 'react'
import Message from '../Message/Message'
import "./Messages.css"

const Messages = () => {
  return (
    <div className='messages'>
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages