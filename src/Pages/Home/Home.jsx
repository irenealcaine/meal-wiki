import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [meal, setMeal] = useState([])

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
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
    </div>
  )
}

export default Home
