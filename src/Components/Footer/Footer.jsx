import './Footer.css'
import React from 'react'

const Footer = () => {

  const navItems = ['Categories', 'Ingredients', 'Zones']

  return (
    <footer className='footer'>
      <nav>
        <ul>
          {navItems.map((navItem) => (
            <li key={navItem}>{navItem}</li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
