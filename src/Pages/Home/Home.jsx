import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';

const Home = () => {

  const [meal, setMeal] = useState([])

  useEffect(() => {
    fetch(requests.randomMeal)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
        console.log(meal)
      });
  }, [])


  return (
    <div>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quas asperiores quisquam perferendis? Magnam quae consectetur quia sint et deserunt qui. Distinctio ratione deleniti voluptate qui nesciunt dolor in soluta?</p>
      <h2>A random meal you may like</h2>
      <p>{meal?.strMeal}</p>
      <img src={meal?.strMealThumb} alt={meal?.strMeal} />
    </div>
  )
}

export default Home
