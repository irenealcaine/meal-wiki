import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';
import Loader from '../../Components/Loader/Loader';
import Description from '../../Components/Description/Description';

const Categories = () => {

  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    fetch(requests.mealCategories)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1>Categories</h1>

      <Description>
        <p>Looking for something specific to cook? You can start with an <Link to={'/categories/Starter'}>starter</Link>, continue with an exquisite <Link to={'/categories/Pasta'}>pasta</Link> dish, and finish with a <Link to={'/categories/Dessert'}>dessert</Link>. If you are a meat lover, you can check out our selection of <Link to={'/categories/Beef'}>beef</Link> dishes, or alternatively, take a look at our <Link to={'/categories/Vegan'}>vegan</Link> plates. There's something for everyone! There's even a <Link to={'/categories/Miscellaneous'}>miscellaneous</Link> section.</p>
      </Description>

      {loading && <Loader />}

      <GridContainer columns={4}>
        {categories.map((category) => (
          <Link key={category.idCategory} to={`/categories/${category.strCategory}`}>
            <GridItem>
              <h2>{category.strCategory}</h2>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              {/* <p>{category.strCategoryDescription}</p> */}
            </GridItem>
          </Link>
        ))}
      </GridContainer>
    </div>
  )
}

export default Categories
