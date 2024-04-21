import React, { useEffect, useState } from 'react'
import { requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';
import Loader from '../../Components/Loader/Loader';
import Description from '../../Components/Description/Description';

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

      <Description>
        <p>Looking to explore different culinary regions through your cooking? Start your journey with robust <Link to={`/areas/American`}>American</Link> dishes, sail across to <Link to={`/areas/Italian`}>Italy</Link> for a pasta or risotto night, and then venture to <Link to={`/areas/Japanese`}>Japan</Link> for some exquisite sushi or ramen. Don’t forget to tour the wonderful flavors of <Link to={`/areas/Spanish`}>Spain</Link> with a traditional paella, and if you're feeling adventurous, give <Link to={`/areas/British`}>British</Link> cuisine a try with some classic fish and chips or a hearty pie. We have recipes and ingredients from all over the globe to satisfy every palate! Plus, there's even a section dedicated to international miscellany for the curious chef.</p>
      </Description>

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
