import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';

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
      <GridContainer>
        {categories.map((category) => (
          <GridItem key={category.idCategory}>
            <Link to={`/categories/${category.strCategory}`}>
              <h2>{category.strCategory}</h2>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              {/* <p>{category.strCategoryDescription}</p> */}
            </Link>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  )
}

export default Categories
