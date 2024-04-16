import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link, useParams } from 'react-router-dom'

const CategoryList = () => {

  const { category } = useParams()

  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    fetch(`${requests.filterByCategory}${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryList(data.meals);
        console.log(data)
      });
  }, [])

  return (
    <div>
      <h1>{category}</h1>
      {categoryList.map((categoryItem) => (
        <Link key={categoryItem.idMeal} to={`/${categoryItem.idMeal}`}>
          <h2>{categoryItem.strMeal}</h2>
          <img src={categoryItem.strMealThumb} alt={categoryItem.strMeal} />
        </Link>
      ))}
    </div>
  )
}

export default CategoryList
