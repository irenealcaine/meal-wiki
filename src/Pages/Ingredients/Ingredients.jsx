import React, { useEffect, useState } from 'react'
import { descriptions, requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';
import Loader from '../../Components/Loader/Loader';
import Description from '../../Components/Description/Description';
import Pagination from '../../Components/Pagination/Pagination';
import Input from '../../Components/Input/Input';

const Ingredients = () => {

  const [ingredients, setIngredients] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchIngredient, setSearchIngredient] = useState('')

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

  const filteredIngredients = ingredients.filter(ingredient => ingredient.strIngredient.toLowerCase().includes(searchIngredient.toLowerCase()))
  console.log(filteredIngredients)

  const itemsPerPage = 40
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      <h1>Ingredients</h1>

      <Description description={descriptions.ingredients} />

      <h2>Looking for some ingredient?</h2>
      <Input placeholder={'Search a ingredient...'} onChange={(e) => setSearchIngredient(e.target.value)} />

      {loading && <Loader />}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        data={filteredIngredients}
      />

      <GridContainer columns={4}>
        {
          filteredIngredients.length > 0 ? (
            filteredIngredients.slice(startIndex, endIndex).map((ingredient) => (
              <Link key={ingredient.idIngredient} to={`/ingredients/${ingredient.strIngredient}`}>
                <GridItem>
                  <h2>{ingredient.strIngredient}</h2>
                  <img src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`} alt={ingredient.strIngredient} />
                  {/* <p>{ingredient.strDescription}</p> */}
                </GridItem>
              </Link>
            ))
          ) : (<p>There's no ingredients named like this.</p>)
        }
      </GridContainer>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        data={filteredIngredients}
      />
    </div>
  )
}

export default Ingredients
