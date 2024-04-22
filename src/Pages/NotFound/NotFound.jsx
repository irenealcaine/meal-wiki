import React from 'react'
import Description from '../../Components/Description/Description'
import { descriptions } from '../../Utils/constants'
import Loader from '../../Components/Loader/Loader'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <div className='message'>
        <Loader />
        <Description description={descriptions.notFound} />

      </div>
    </div>
  )
}

export default NotFound
