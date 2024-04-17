import React from 'react'
import './GridContainer.css'

const GridContainer = ({ children, columns }) => {
  return (
    <div className={`grid-container columns-${columns}`}>{children}</div>
  )
}

export default GridContainer
