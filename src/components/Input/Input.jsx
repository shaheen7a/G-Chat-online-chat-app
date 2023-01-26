import React from 'react'
import "./Input.css"
import upload from "../../assets/imgs/upload.png"
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something...' />
      <div className='send'>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={upload} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input