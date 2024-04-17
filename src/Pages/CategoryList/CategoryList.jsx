import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link, useParams } from 'react-router-dom'
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';

const CategoryList = () => {

  const { category } = useParams()

  const [categoryList, setCategoryList] = useState([])
  const [categoryDescription, setCategoryDescription] = useState('')

  useEffect(() => {
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
      });
  }, [])

  return (
    <div>
      <h1>{category}</h1>
      <p>{categoryDescription}</p>
      <GridContainer>
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
