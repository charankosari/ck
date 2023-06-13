import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const signin=()=>{
      axios.get("http://localhost:7777/getUsers").then((response)=>{
        const users = response.data;
      const userNamee = users.find((user) => user.name === name );
      const userPasswordd = users.find((user) => user.password === password );
      if(userNamee && userPasswordd){
        window.location  = '/finally';
      }
      else if (userNamee) {
        alert('incorrect password')
      } else {
        alert('incorrect username')
      }
    });
    }
  return (
    <>
    <input type="text" required  placeholder='username' onChange={(e) => setName(e.target.value)}/>
    <input type="password" required placeholder='password' onChange={(e) => setPassword(e.target.value)} />
    <button onClick={signin}>Log In</button>

    <h1>if you want to create account,click <Link to='/signup'>here</Link> to sign in </h1>
    </>
  )
}
export default Login
