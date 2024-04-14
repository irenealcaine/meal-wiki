import { Link } from 'react-router-dom'
import { navItems } from '../../Utils/constants'
import './Footer.css'
import React from 'react'

const Footer = () => {


  return (
    <footer className='footer'>
      <nav>
        <ul>
          {navItems.map((navItem) => (
            <li key={navItem.name}>
              <Link to={navItem.to}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
