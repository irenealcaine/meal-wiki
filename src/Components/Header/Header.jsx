import './Header.css'
import React from 'react'

import logo from '../../assets/images/logo512.png'
import { navItems } from '../../Utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {


  return (
    <header className='header'>
      <Link to={'/'}><img src={logo} alt="logo" className='logo' /></Link>
      <nav>
        <ul>
          {navItems.map((navItem) => (
            <li key={navItem.name}>
              <Link to={navItem.to}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
