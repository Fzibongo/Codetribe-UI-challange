import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <header>
      <div className="logo">
        UBONGO
      </div>
      <div className="display-menu">
        <Link className='menu' to={"/"}>Home</Link>
        <Link className='menu' to={"/Services"}>Services</Link>
        <Link className='menu' to={"/About"}>About </Link>
      </div>
    </header>
  )
}

export default navbar
