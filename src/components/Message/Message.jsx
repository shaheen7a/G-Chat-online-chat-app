import React from 'react'
import "./Message.css"
const Message = () => {
  return (
    <div className='message'>
      <div className="message-info">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        <span>Just now</span>
      </div>
      <div className="message-content">
        <p>Hello</p>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
      </div>
    </div>
  )
}

export default Message