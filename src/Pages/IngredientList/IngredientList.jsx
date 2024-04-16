import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants'
import { Link, useParams } from 'react-router-dom'


const IngredientList = () => {

  const { ingredient } = useParams()

  const [ingredientList, setIngredientList] = useState([])

  useEffect(() => {
    fetch(`${requests.filterByMainIngredient}${ingredient}`)
      .then((res) => res.json())
      .then((data) => {
        setIngredientList(data.meals);
        console.log(data)
      });
  }, [])


  return (
    <div>
      <h1>{ingredient}</h1>
      {ingredientList.map((ingredientItem) => (
        <div key={ingredientItem.idMeal}>
          <h2>{ingredientItem.strMeal}</h2>
          <img src={ingredientItem.strMealThumb} alt={ingredientItem.strMeal} />
        </div>
      ))}
    </div>
  )
}

export default IngredientList
