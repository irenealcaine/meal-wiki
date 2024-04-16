import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants'
import { useParams } from 'react-router-dom'

const MealDetails = () => {

  const { idMeal } = useParams()

  const [meal, setMeal] = useState([])

  useEffect(() => {
    fetch(`${requests.mealDetailsById}${idMeal}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
        // console.log(meal)
      });
  }, [])

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strArea}</p>
      <p>{meal.strCategory}</p>
      <p>{meal.strInstructions}</p>
      <p>{meal.strTags}</p>
      <a href={meal.strSource}>Source</a>
      <a href={meal.strYoutube}>Youtube video</a>
    </div>
  )
}

export default MealDetails
