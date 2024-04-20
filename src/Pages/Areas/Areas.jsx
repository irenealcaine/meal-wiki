import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';
import Loader from '../../Components/Loader/Loader';

// https://www.flaticon.com/packs/countrys-flags <-- FLAGS ICONS

const Areas = () => {

  const [areas, setAreas] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(requests.mealAreas)
      .then((res) => res.json())
      .then((data) => {
        setAreas(data.meals);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      });
  }, [])

  return (
    <div>
      <h1>Areas</h1>

      {loading && <Loader />}

      <GridContainer columns={4}>
        {areas.map((area) => (
          <Link key={area.strArea} to={`/areas/${area.strArea}`}>
            <GridItem>
              <h2>{area.strArea}</h2>
              <img
                src={`/assets/images/flags/${area.strArea}.png`}
                alt={area.strArea}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/images/flags/Unknown.png";
                }}
              />
            </GridItem>
          </Link>
        ))}
      </GridContainer>
    </div>
  )
}

export default Areas
