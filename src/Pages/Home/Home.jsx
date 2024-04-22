import './Home.css'
import React, { useEffect, useState } from 'react'
import { descriptions, requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import Description from '../../Components/Description/Description';

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

  const renderIngredientList = () => {
    const ingredientsList = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient) {
        ingredientsList.push(
          <li key={i}> - {ingredient} </li>
        );
      }
    }
    return ingredientsList;
  };


  return (
    <div className='home'>
      <h1>Home</h1>
      <Description description={descriptions.home} />
      <h2>A random meal you may like</h2>
      {loading && <Loader />}
      <Link to={`/${meal.idMeal}`} className='random-meal'>
        <img src={meal?.strMealThumb} alt={meal?.strMeal} />
        <div className='meal-info'>
          <h3>{meal?.strMeal}</h3>
          <p><span>Area:</span> {meal?.strArea}</p>
          <p><span>Category:</span> {meal?.strCategory}</p>
          <span>Ingredients:</span>
          <ul>{renderIngredientList()}</ul>

        </div>
      </Link>
    </div>
  )
}

export default Home
