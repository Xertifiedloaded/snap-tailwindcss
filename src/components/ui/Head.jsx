
import React, { useState } from 'react';
import { Nav } from '../../utils/nav';
import logo from '../../assets/images/logo.svg'
import hamburger from '../../assets/images/icon-menu.svg'
import close from '../../assets/images/icon-close-menu.svg'
export default function Head() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [active, setActive] = useState(false)
  const toggler = () => {
    setActive(!active)
  }
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <header className='w-width relative mx-auto flex items-center  gap-[40px] justify-between py-3'>
        <div className='w-[5%] sm:w-[20%]'>
          <img src={logo} alt="" />
        </div>
        <nav
          className={`flex justify-between md:text-[14px] w-[95%] 
        ${active ? 'sm:justify-start flex sm:items-start sm:top-10 sm:h-[100vh] sm:mx-0 z-10  sm:absolute sm:w-[100%] sm:flex-col sm:px-[20px] sm:py-[50px] bg-black sm:text-white' : 'sm:hidden'} 
        items-center`}>
          <ul className='flex sm: sm:flex-col  gap-4'>
            {Nav.map((navItem, index) => (
              <li className='text capitalize' key={index} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                {navItem.tag}
                {navItem.dropdown && showDropdown && (
                  <ul className='dropdown-content'>
                    {navItem.dropdown.map((dropdownItem, index) => (
                      <li className='text-gray' key={index}>{dropdownItem.content}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex sm: sm:flex-col  items-center sm:items-start gap-4 sm:mt-4">
            <button>
              Login
            </button>
            <button className='border border-black py-2 rounded-lg sm:w-full px-6 sm:px-0'>
              Signup
            </button>
          </div>
        </nav>
        <nav className='hidden sm:block' onClick={toggler}>
          {
            active ? <img src={close} alt="" /> : <img src={hamburger} alt="" />
          }
        </nav>
      </header>
    </>
  );
}

