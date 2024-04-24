import { Link } from 'react-router-dom'
import { navItems, socialMedia } from '../../Utils/constants'
import './Footer.css'
import React from 'react'

const Footer = () => {

  return (
    <footer className='footer'>
      <nav>
        <ul>
          {socialMedia.map((socialMediaItem) => (
            <li key={socialMediaItem.name}>
              <Link to={socialMediaItem.link} rel="noopener noreferrer" target="_blank">{socialMediaItem.logo}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
