import React, { useEffect, useState } from 'react'
import './MealDetails.css'
import { requests } from '../../Utils/constants'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'

const MealDetails = () => {

  const navigate = useNavigate()

  const { idMeal } = useParams()

  const [meal, setMeal] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${requests.mealDetailsById}${idMeal}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        navigate('/404')
      });
  }, [])

  const renderIngredientList = () => {
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
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

  const instructions = meal?.strInstructions?.split('. ').map((text, index, array) => {
    return index === array.length - 1 ? text : text + ".";
  });

  return (
    <div className='meal-details'>
      {loading && <Loader />}
      <section className='meal-principal'>
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className='meal-source top'>
          <a href={meal.strSource}>Source</a>
          <a href={meal.strYoutube}>Youtube video</a>
        </div>
      </section>

      <section className='meal-aside'>
        <div className='meal-info'>
          <p>Area: <Link to={`/areas/${meal.strArea}`}>{meal.strArea}</Link></p>
          <p>Category: <Link to={`/categories/${meal.strCategory}`}>{meal.strCategory}</Link></p>
        </div>

        <h2>Ingredients</h2>
        <ul className="ingredients-list">{renderIngredientList()}</ul>

        <h2>Instructions</h2>
        {/* <p className='meal-instructions'>{meal.strInstructions}</p> */}
        <div className='meal-instructions'>
          {instructions?.map((step, index) => (
            <p key={index}> - {step}</p>
          ))}
        </div>

        <div className='meal-source bottom'>
          <a href={meal.strSource}>Source</a>
          <a href={meal.strYoutube}>Youtube video</a>
        </div>

      </section>

    </div>
  )
}

export default MealDetails
