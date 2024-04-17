import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';

const Areas = () => {

  const [areas, setAreas] = useState([])

  useEffect(() => {
    fetch(requests.mealAreas)
      .then((res) => res.json())
      .then((data) => {
        setAreas(data.meals);
        // console.log(areas)
      });
  }, [])

  return (
    <div>
      <h1>Areas</h1>
      <GridContainer>
        {areas.map((area) => (
          <Link key={area.strArea} to={`/areas/${area.strArea}`}>
            <GridItem>
              <h2>{area.strArea}</h2>
            </GridItem>
          </Link>
        ))}
      </GridContainer>
    </div>
  )
}

export default Areas
