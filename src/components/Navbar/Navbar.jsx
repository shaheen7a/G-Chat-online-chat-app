import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { auth } from '../../firebase'
import "./Navbar.css"

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="user" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar