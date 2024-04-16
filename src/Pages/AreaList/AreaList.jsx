import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants'
import { useParams } from 'react-router-dom'

const AreaList = () => {

  const { area } = useParams()

  const [areaList, setAreaList] = useState([])

  useEffect(() => {
    fetch(`${requests.filterByArea}${area}`)
      .then((res) => res.json())
      .then((data) => {
        setAreaList(data.meals);
        // console.log(areaList)
      });
  }, [])

  return (
    <div>
      <h1>{area}</h1>
      {areaList.map((areaItem) => (
        <div key={areaItem.idMeal}>
          <h2>{areaItem.strMeal}</h2>
          <img src={areaItem.strMealThumb} alt={areaItem.strMeal} />
        </div>
      ))}
    </div>
  )
}

export default AreaList
