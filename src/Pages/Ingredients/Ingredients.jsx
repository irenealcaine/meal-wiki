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
        <p>Are you trying to pinpoint specific ingredients for your next culinary creation? Start off with essentials like <Link to={'/ingredients/Onion'}>onions</Link>, move on to a hearty course with <Link to={'/ingredients/Beef'}>beef</Link>, and add a finishing touch with <Link to={'/ingredients/Avocado'}>avocado</Link> in your salads or <Link to={'/ingredients/Rice'}>rice</Link> as a side. If you're into poultry, consider incorporating <Link to={'/ingredients/Eggs'}>eggs</Link> into your dishes, or if you are a fan of vegetarian options, experiment with diverse recipes using <Link to={'/ingredients/Potatoes'}>potatoes</Link>. We cater to all preferences! Additionally, our pantry section includes a variety of other essential ingredients to spice up any meal.</p>
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
