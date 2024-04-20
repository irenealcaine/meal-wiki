import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';
import Loader from '../../Components/Loader/Loader';

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
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, ducimus eveniet? Voluptas dignissimos inventore eligendi numquam, reiciendis aliquam ducimus soluta saepe itaque est. Eveniet quis dolorem ipsam consequuntur molestias officia!
        Ex officia distinctio labore ipsam eum rerum necessitatibus animi ut molestiae veritatis eos aliquam nam dolorum nostrum, reiciendis aspernatur deleniti perspiciatis praesentium dignissimos culpa dolores ullam fuga commodi itaque? Ad.</p>

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
