import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';

const Login = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/");

    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  
  return (
    <div className='form-container'>
      <div className='form-wrapper'>
        <span className='logo'>Online Chat App</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>Login</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Yo don't have an account? <Link to={"/register"}>Register</Link></p>
      </div>
    </div>
  )
}

export default Login