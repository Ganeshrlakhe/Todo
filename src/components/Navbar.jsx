import React from 'react'
import { FaTasks } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex justify-around  bg-gray-900 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8 flex gap-2 items-center'><FaTasks />TODO</span>
        </div>
      <ul className="flex gap-8 mx-9">
      </ul>
    </nav>
  )
}

export default Navbar