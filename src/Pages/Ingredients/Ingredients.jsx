import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';

const Ingredients = () => {

  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    fetch(requests.mealIngredients)
      .then((res) => res.json())
      .then((data) => {
        setIngredients(data.meals);
        // console.log(ingredients)
      });
  }, [])

  return (
    <div>
      <h1>Ingredients</h1>
      {ingredients.map((ingredient) => (
        <Link key={ingredient.idIngredient} to={`/ingredients/${ingredient.strIngredient}`}>
          <h2>{ingredient.strIngredient}</h2>
          <p>{ingredient.strDescription}</p>
        </Link>

      ))}
    </div>
  )
}

export default Ingredients
