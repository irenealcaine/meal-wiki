import './Home.css'
import React, { useEffect, useState } from 'react'
import { descriptions, requests } from '../../Utils/constants';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import Description from '../../Components/Description/Description';
import GridContainer from '../../Components/Layout/Grid/GridContainer';
import GridItem from '../../Components/Layout/Grid/GridItem';
import Input from '../../Components/Input/Input';
import logo from '../../assets/images/logo512.png'

const Home = () => {

  const [meal, setMeal] = useState([])
  const [selectedLetter, setSelectedLetter] = useState('')
  const [mealByLetter, setMealByLetter] = useState('')
  const [mealSearch, setMealSearch] = useState('')
  const [mealSearchResult, setMealSearchResult] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(requests.randomMeal)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
        setLoading(false)
      });
  }, [])

  useEffect(() => {
    if (selectedLetter) {
      fetch(`${requests.mealByFirstLetter}${selectedLetter}`)
        .then((res) => res.json())
        .then((data) => {
          setMealByLetter(data.meals);
        });
    }
  }, [selectedLetter])

  useEffect(() => {
    if (mealSearch) {
      fetch(`${requests.mealByName}${mealSearch}`)
        .then((res) => res.json())
        .then((data) => {
          setMealSearchResult(data.meals);
        });
    }
  }, [mealSearch])

  const renderIngredientList = () => {
    const ingredientsList = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = meal[`strIngredient${i}`];
      if (ingredient) {
        ingredientsList.push(
          <li key={i}>{ingredient}</li>
        );
      }
    }
    return ingredientsList;
  };

  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps;
  })(); //constants file


  return (
    <div className='home'>
      <section className='hero'>
        <div className='hero-info'>
          <h1>The meal wiki</h1>
          <Description description={descriptions.home} />
        </div>
        <img src={logo} alt="logo" />
      </section>


      <hr />

      <h2>What are you looking for?</h2>
      <Input placeholder={'Search a meal...'} onChange={(e) => setMealSearch(e.target.value)} />
      <GridContainer columns={5}>
        {
          mealSearch ? (
            mealSearchResult && mealSearchResult.length > 0 ? (
              mealSearchResult.map((mealItem) => (
                <Link key={mealItem?.idMeal} to={`/${mealItem?.idMeal}`}>
                  <GridItem>
                    <h3>{mealItem?.strMeal}</h3>
                    <img src={mealItem?.strMealThumb} alt={mealItem?.strMeal} />
                  </GridItem>
                </Link>
              ))
            ) : (
              <p>There's no meal named like this.</p>
            )
          ) : null
        }
      </GridContainer>

      <hr />

      <h2>A random meal you may like</h2>
      {loading && <Loader />}
      <Link to={`/${meal.idMeal}`} className='random-meal'>
        <img src={meal?.strMealThumb} alt={meal?.strMeal} />
        <div className='meal-info'>
          <h3>{meal?.strMeal}</h3>
          <p><span>Area:</span> {meal?.strArea}</p>
          <p><span>Category:</span> {meal?.strCategory}</p>
          <span>Ingredients:</span>
          <ul>{renderIngredientList()}</ul>
        </div>
      </Link>

      <hr />

      <h2>Search by first letter</h2>
      <p className='letters'>{letters.map((letter) => (
        <span
          key={letter}
          onClick={() => setSelectedLetter(letter)}
          className={`${selectedLetter === letter ? 'active' : ''}`}
        >{letter}</span>
      ))}</p>
      <GridContainer columns={5}>
        {
          selectedLetter ? (
            mealByLetter && mealByLetter.length > 0 ? (
              mealByLetter.map((mealItem) => (
                <Link key={mealItem?.idMeal} to={`/${mealItem?.idMeal}`}>
                  <GridItem>
                    <h3>{mealItem?.strMeal}</h3>
                    <img src={mealItem?.strMealThumb} alt={mealItem?.strMeal} />
                  </GridItem>
                </Link>
              ))
            ) : (
              <p>There's no meal with that letter.</p>
            )
          ) : null
        }
      </GridContainer>
    </div>
  )
}

export default Home
