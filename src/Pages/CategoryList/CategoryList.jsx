import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link, useNavigate, useParams } from 'react-router-dom'
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';
import Loader from '../../Components/Loader/Loader';
import Description from '../../Components/Description/Description';

const CategoryList = () => {

  const { category } = useParams()

  const [categoryList, setCategoryList] = useState([])
  const [categoryDescription, setCategoryDescription] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    fetch(`${requests.filterByCategory}${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryList(data.meals);
      });
    fetch(`${requests.mealCategories}`)
      .then((res) => res.json())
      .then((data) => {
        const categoryJson = data.categories.filter(categoryItem => categoryItem.strCategory == category)
        setCategoryDescription(categoryJson[0].strCategoryDescription);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        navigate('/404')
      });
  }, [])

  return (
    <div>
      <h1>{category}</h1>
      <Description>{categoryDescription}</Description>
      {loading && <Loader />}
      <GridContainer columns={3}>
        {categoryList.map((categoryItem) => (
          <Link key={categoryItem.idMeal} to={`/${categoryItem.idMeal}`}>
            <GridItem>
              <h2>{categoryItem.strMeal}</h2>
              <img src={categoryItem.strMealThumb} alt={categoryItem.strMeal} />
            </GridItem>
          </Link>
        ))}
      </GridContainer>
    </div>
  )
}

export default CategoryList
