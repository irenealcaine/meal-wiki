import React from 'react'
import './Input.css'

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input className='text-input'
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
