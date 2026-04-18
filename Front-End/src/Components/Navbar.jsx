import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-red-200 flex justify-between'>

    <div className='flex gap-5'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
      <div className='flex gap-5'>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/registration">Registration</NavLink>
      </div>
    </div>
  )
}

export default Navbar
