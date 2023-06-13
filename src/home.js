import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
function home() {
  return (
    <nav style={{backgroundColor:'black',display:'flex',flexDirection:'row',gap:30}}>
      <Link to='/login' >login</Link>
      <Link to='/signup'>signup</Link>
    </nav>
  )
}
export default home
