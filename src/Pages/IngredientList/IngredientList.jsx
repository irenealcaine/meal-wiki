import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants'
import { Link, useParams } from 'react-router-dom'
import GridContainer from '../../Components/Layout/Grid/GridContainer'
import GridItem from '../../Components/Layout/Grid/GridItem'


const IngredientList = () => {

  const { ingredient } = useParams()

  const [ingredientList, setIngredientList] = useState([])
  const [ingredientDescription, setIngredientDescription] = useState('')

  useEffect(() => {
    fetch(`${requests.filterByMainIngredient}${ingredient}`)
      .then((res) => res.json())
      .then((data) => {
        setIngredientList(data.meals);
        // console.log(data)
      });
    fetch(`${requests.mealIngredients}`)
      .then((res) => res.json())
      .then((data) => {
        const ingredientJson = data.meals.filter(ingredientItem => ingredientItem.strIngredient == ingredient)
        setIngredientDescription(ingredientJson[0].strDescription);
      });
  }, [])


  return (
    <div>
      <h1>{ingredient}</h1>
      <p>{ingredientDescription}</p>
      <GridContainer>
        {ingredientList.map((ingredientItem) => (
          <Link key={ingredientItem.idMeal} to={`/${ingredientItem.idMeal}`}>
            <GridItem>
              <h2>{ingredientItem.strMeal}</h2>
              <img src={ingredientItem.strMealThumb} alt={ingredientItem.strMeal} />
            </GridItem>
          </Link>
        ))}
      </GridContainer>
    </div>
  )
}

export default IngredientList
