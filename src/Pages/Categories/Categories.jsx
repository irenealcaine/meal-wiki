import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';

const Categories = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(requests.mealCategories)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
        // console.log(categories)
      });
  }, [])

  return (
    <div>
      <h1>Categories</h1>
      {categories.map((category) => (
        <Link key={category.idCategory} to={`/categories/${category.strCategory}`}>
          <h2>{category.strCategory}</h2>
          <img src={category.strCategoryThumb} alt="" />
          <p>{category.strCategoryDescription}</p>
        </Link>
      ))}
    </div>
  )
}

export default Categories
