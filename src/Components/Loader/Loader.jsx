import React from 'react'
import './Loader.css'
import loader from '../../assets/images/loader.gif'

const Loader = () => {
  return (
    <div className='loader'>
      <img src={loader} alt="loader" />
    </div>
  )
}

export default Loader
