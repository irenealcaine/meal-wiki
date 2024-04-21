import './Home.css'
import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';

const Home = () => {

  const [meal, setMeal] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(requests.randomMeal)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
        setLoading(false)
      });
  }, [])


  return (
    <div className='home'>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quas asperiores quisquam perferendis? Magnam quae consectetur quia sint et deserunt qui. Distinctio ratione deleniti voluptate qui nesciunt dolor in soluta?</p>
      <h2>A random meal you may like</h2>
      {loading && <Loader />}
      <Link to={`/${meal.idMeal}`}>
        <h3>{meal?.strMeal}</h3>
        <img src={meal?.strMealThumb} alt={meal?.strMeal} />
      </Link>
    </div>
  )
}

export default Home
