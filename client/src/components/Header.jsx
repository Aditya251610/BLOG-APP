import React from 'react'
import { Link } from 'react-router-dom'
import { SiFoodpanda } from "react-icons/si";
import './styles/header.css';

const Header = () => {
  return (
    <div className='bg-[#331D2C] text-[white] h-30 w-30'>
      <div className='flex justify-between'>
        <div className='flex justify-center items-center px-4'>
          <SiFoodpanda size={35} className='text-[#D9EDBF]'/>
          <h1 className='font-bold text-2xl px-4 py-4'>CookShare</h1>
        </div>
        <ul className='flex justify-center items-center align-items-center gap-4 px-4 py-4'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </div> 
    </div>
  )
}

export default Header
