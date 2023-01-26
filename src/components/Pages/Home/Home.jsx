import React from 'react'
import "./Home.css"
import Sidebar from '../../Sidebar/Sidebar'
import Chat from '../../Chat/Chat'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home