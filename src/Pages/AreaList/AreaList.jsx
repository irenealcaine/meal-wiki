import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants'
import { useParams, Link, useNavigate } from 'react-router-dom'
import GridContainer from '../../Components/Layout/Grid/GridContainer'
import GridItem from '../../Components/Layout/Grid/GridItem'
import Loader from '../../Components/Loader/Loader'

const AreaList = () => {

  const { area } = useParams()

  const [areaList, setAreaList] = useState([])
  const [loading, setLoading] = useState(false)
  const [NullArray, setNullArray] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    fetch(`${requests.filterByArea}${area}`)
      .then((res) => res.json())
      .then((data) => {
        setAreaList(data.meals);
        setLoading(false)
        setNullArray(data.meals[0].strMeal)
      })
      .catch((error) => {
        console.log(error)
        navigate('/404')
      });
  }, [])

  return (
    <div>
      <h1>{area}</h1>

      {loading && <Loader />}

      <GridContainer columns={3}>
        {areaList && areaList.map((areaItem) => (
          <Link key={areaItem.idMeal} to={`/${areaItem.idMeal}`}>
            <GridItem>
              <h2>{areaItem.strMeal}</h2>
              <img src={areaItem.strMealThumb} alt={areaItem.strMeal} />
            </GridItem>
          </Link>
        ))}
      </GridContainer>
    </div>
  )
}

export default AreaList
