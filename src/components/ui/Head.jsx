
import React, { useState } from 'react';
import { Nav } from '../../utils/nav';
import logo from '../../assets/images/logo.svg'
import hamburger from '../../assets/images/icon-menu.svg'
import close from '../../assets/images/icon-close-menu.svg'
import { Link } from 'react-router-dom';
export default function Head() {

  let [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className='px-10 py-4 shadow-md w-full m-auto flex items-center sm:z-[99] md:z-[99]  static top-0 bg-white'>
    <div className='font-bold text-2xl'>Snap</div>
    <div onClick={toggleIsOpen} className='menu w-7 h-7 absolute right-8 top-6 cursor-pointer xl:hidden lg:hidden'>
      {isOpen ? <img src={close} alt='' /> : <img src={hamburger} alt='' />}
    </div>
    <nav
      className={`flex justify-between w-[95%] sm:bg-black md:bg-black md:text-white 
        ${isOpen ? 'sm:top-12' : 'sm:top-[-490px] md:top-[-490px]'}
        ${isOpen ? 'md:top-12' : 'md:top-[-490px]'}  
        sm:text-white sm:justify-normal md:justify-normal items-center sm:absolute md:absolute sm:top-16 md:top-16 
        sm:flex-col md:flex-col sm:z-[2] md:z-[-1] md:left-0 md:w-full sm:left-0 sm:w-[100%] transition-all duration-500 ease-in`}
    >
      <ul className='flex text-[15px] justify-between pl-9 sm:pl-0 md:pl-0 md:w-[100%] sm:flex-col md:flex-col sm:w-[100%]'>
        {Nav.map((link, index) => (
          <li key={index} className='md:my-2 sm:my-4'>
            <Link to='/' className='my-7 capitalize ml-8 md:my-0 font-semibold'>
              {link.tag}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
  )
}

