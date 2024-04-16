import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';

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
      {areas.map((area) => (
        <Link key={area.strArea} to={`/area/${area.strArea}`}>
          <h2>{area.strArea}</h2>
        </Link>
      ))}
    </div>
  )
}

export default Areas
