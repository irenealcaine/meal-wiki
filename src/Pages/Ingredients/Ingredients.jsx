import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';
import Loader from '../../Components/Loader/Loader';
import Description from '../../Components/Description/Description';

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

      <Description>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, obcaecati! Dicta ipsa sit quam officiis placeat, qui minima. Distinctio eveniet totam excepturi recusandae illum aut porro doloribus itaque id reprehenderit?
          Saepe porro voluptatum incidunt laborum, ipsa esse consequatur ab! Odio rem, fuga autem porro deserunt sit dolorum quibusdam natus ex consequuntur quo tempore laborum quaerat error in similique distinctio vero?</p>
      </Description>

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
