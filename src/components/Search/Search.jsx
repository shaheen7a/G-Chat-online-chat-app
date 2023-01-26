import React from 'react'
import "./Search.css"

const Search = () => {
  return (
    <div className='search'>
      <div className='search-form'>
        <input type="text" placeholder='Find a user' />
      </div>
      <div className='user-chat'>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
        <div className='user-chat-info'>
          <span>Aous</span>
        </div>
      </div>
    </div>
  )
}

export default Search