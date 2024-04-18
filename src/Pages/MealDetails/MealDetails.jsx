import React, { useEffect, useState } from 'react'
import './MealDetails.css'
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
            {measure} <Link to={`/ingredients/${ingredient}`}>{ingredient}</Link>
          </li>,
        );
      }
    }
    return ingredientsList;
  };


  return (
    <div className='meal-details'>
      <div className='meal-principal'>
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>

      <div className='meal-aside'>
        <div className='meal-info'>
          <p>Area: <Link to={`/areas/${meal.strArea}`}>{meal.strArea}</Link></p>
          <p>Category: <Link to={`/categories/${meal.strCategory}`}>{meal.strCategory}</Link></p>
        </div>

        <h2>Ingredients</h2>
        <ul className="ingredients-list">{renderIngredientList()}</ul>

        <h2>Instructions</h2>
        <p className='meal-instructions'>{meal.strInstructions}</p>
        {/* <p>{meal.strTags}</p> */}
        <div className='meal-source'>
          <a href={meal.strSource}>Source</a>
          <a href={meal.strYoutube}>Youtube video</a>
        </div>

      </div>

    </div>
  )
}

export default MealDetails
