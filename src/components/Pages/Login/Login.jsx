import React from 'react'

const Login = () => {
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Online Chat App</span>
        <span className='title'>Register</span>
        <form>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>Login</button>
        </form>
        <p>Yo don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login