import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';
import Loader from '../../Components/Loader/Loader';

const Ingredients = () => {

  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(requests.mealIngredients)
      .then((res) => res.json())
      .then((data) => {
        setIngredients(data.meals);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      });
  }, [])

  return (
    <div>
      <h1>Ingredients</h1>

      {loading && <Loader />}

      <GridContainer columns={4}>
        {ingredients.slice(0, 50).map((ingredient) => (
          <Link key={ingredient.idIngredient} to={`/ingredients/${ingredient.strIngredient}`}>
            <GridItem>
              <h2>{ingredient.strIngredient}</h2>
              <img src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt={ingredient.strIngredient} />
              {/* <p>{ingredient.strDescription}</p> */}
            </GridItem>
          </Link>
        ))}
      </GridContainer>
    </div>
  )
}

export default Ingredients
