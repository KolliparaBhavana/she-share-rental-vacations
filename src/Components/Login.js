import React from 'react'
import { FaLock } from "react-icons/fa";
import './Login.css'
import { IoMdMail } from "react-icons/io";
import { NavBar } from './NavBar';
import { useState} from 'react';

import { Home } from './Home';

export const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const submitLogin=(e) =>{
    return (
      <div>
        <Home/>
        </div>
    );
  }
  return (
    <div>
    <NavBar/>
    <div className="wrapper">
    <div className="form-box-login">
      <form onSubmit={e => submitLogin(e)}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" placeholder="Email" value={email}onChange={e => setEmail(e.target.value)} required/>
          <IoMdMail className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" value={password}onChange={e => setPassword(e.target.value)} required/>
          <FaLock className='icon'/>
        </div>
        <button type="submit"><a href="/Home">Login</a></button>
        <div className="register-link">
          <p>Don't have an account? <a href="/register">Register</a></p>

        </div>
      </form>
    </div>
        </div>
        </div>
  )
}
