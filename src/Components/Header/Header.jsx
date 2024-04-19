import './Header.css'
import React, { useState } from 'react'

import logo from '../../assets/images/logo512.png'
import { navItems } from '../../Utils/constants'
import { Link, useLocation } from 'react-router-dom'

import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();

  return (
    <header className='header'>
      <Link to={'/'} className={`logo ${isOpen ? 'open' : ''}`}><img src={logo} alt="logo" className='logo' /></Link>
      <nav className={`${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to={'/'} className={`home-link ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}><img src={logo} alt="logo" className='logo' /></Link>
          </li>
          {navItems.map((navItem) => (
            <li key={navItem.name} className={`${location.pathname === `${navItem.to}` && "active"}`}>
              <Link to={navItem.to} onClick={() => setIsOpen(false)}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`open-nav-button`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoClose /> : <FaHamburger />}
      </div>
    </header>
  )
}

export default Header
