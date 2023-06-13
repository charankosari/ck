import React from 'react'
import { useState} from 'react';
import  axios from 'axios'
function Signup() {
  const [name,setName]=useState("")
  const [age,setAge]=useState(0)
  const [password,setPassword]=useState("")
  const createUser = ()=>{
axios.post("http://localhost:7777/createUsers",{
  name: name,
  age: age,
  password: password,
}).then((response)=>{
  alert('user created')
  window.location = '/';
});
  };
  return (
    <div>
    <div>
      <input type="text" placeholder='name..' onChange={(e)=>{setName(e.target.value)}} />
      <input type="number" placeholder='age..' onChange={(e)=>{setAge(e.target.value)}}/>
      <input type="password" placeholder='password..' onChange={(e)=>{setPassword(e.target.value)}} />
      <button onClick={createUser}>create user</button>
    </div>
    </div>
  )
}
export default Signup
