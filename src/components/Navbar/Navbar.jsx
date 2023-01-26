import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user" />
        <span>Shaheen</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar