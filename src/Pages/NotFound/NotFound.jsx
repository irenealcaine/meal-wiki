import React from 'react'
import Description from '../../Components/Description/Description'
import { descriptions } from '../../Utils/constants'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <Description description={descriptions.notFound} />
    </div>
  )
}

export default NotFound
