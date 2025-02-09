import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/UserContext'

const Header = () => {

  const data=useContext(DataContext);

  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
        <h2 className='text-2xl'>{data.city} <input className='bg-white text-black ' type="text" /></h2>
        <div className='flex gap-10 text-lg underline'>
            <Link to='/' className='hover:text-emerald-300'>Home</Link>
            <Link to='/about' className='hover:text-emerald-300'>About</Link>
            <Link to='/contact' className='hover:text-emerald-300'>Contact</Link>
            <Link to='/product' className='hover:text-emerald-300'>Product</Link>
            <Link to='/services' className='hover:text-emerald-300'>Services</Link>
        </div>
    </div>
  )
}

export default Header