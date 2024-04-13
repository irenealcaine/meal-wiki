import './Header.css'
import React from 'react'

import logo from '../../assets/images/logo512.png'

const Header = () => {

  const navItems = ['imgredients', 'zones', ' 3 things']

  return (
    <header className='header'>
      <img src={logo} alt="logo" className='logo' />
      <nav>
        <ul>
          {navItems.map((navItem) => (
            <li key={navItem}>{navItem}</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
