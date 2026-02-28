import React from 'react'
import '../styles/header.min.css'
const Header = () => {
  return (
    <div className='header'>
        <h1>Hello <br /> <span>Mostak</span></h1>
        <button className="button">Log Out</button>
    </div>
  )
}

export default Header