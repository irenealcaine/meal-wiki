import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants'
import { Link, useParams } from 'react-router-dom'

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

  const renderIngredientList = () => {
    const ingredientsList = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredientsList.push(
          <li key={i} className={`ingredient`}>
            {ingredient} - {measure}
          </li>,
        );
      }
    }
    return ingredientsList;
  };


  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div>
        <p>Area: <Link to={`/areas/${meal.strArea}`}>{meal.strArea}</Link></p>
        <p>Category: <Link to={`/categories/${meal.strCategory}`}>{meal.strCategory}</Link></p>
      </div>

      <ul className="ingredients-list">{renderIngredientList()}</ul>

      <p>{meal.strInstructions}</p>
      <p>{meal.strTags}</p>
      <a href={meal.strSource}>Source</a>
      <a href={meal.strYoutube}>Youtube video</a>
    </div>
  )
}

export default MealDetails
