import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaUser,FaLock } from "react-icons/fa";
import { NavBar } from './NavBar';
import { useState } from 'react';

import { Home } from './Home';
import './Register.css'



export const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  const submitRegistration=(e)=> {
   
    return (
      <div>
        <Home/>
        </div>
    );
  }
    return (
        <div><NavBar/>
        <div className="wrapper">
        <div className="form-box-login">
          <form onSubmit={e => submitRegistration(e)}>
            <h1>Register</h1>
            <div className="input-box">
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
              <IoMdMail className='icon' />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
              <FaLock className='icon'/>
            </div>
            
            <button type="submit"><a href="/Home">Register</a></button>
            <div className="register-link">
          <p>Already have an account? <a href="/login">Login</a></p>

        </div>
            
          </form>
        </div>
            </div>
            </div>
      )
}
