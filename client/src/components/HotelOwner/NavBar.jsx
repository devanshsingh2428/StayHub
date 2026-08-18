import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/react'

const NavBar = () => {
  return (
    <div className='flex justify-between  items-center px-4 md:px-8 border-b border-gray-300 py-3 bg-white ' >
      <Link to='/' >
      <img className='invert h-10 ' src={assets.logo} alt="" />
      </Link>
      <UserButton/>
    </div>
  )
}

export default NavBar
