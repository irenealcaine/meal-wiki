import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

export const requests = {
  randomMeal: 'https://www.themealdb.com/api/json/v1/1/random.php',

  mealByName: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  mealByFirstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',

  mealDetailsById: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',

  mealCategories: 'https://www.themealdb.com/api/json/v1/1/categories.php',
  mealIngredients: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
  mealAreas: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',

  filterByMainIngredient: 'https://www.themealdb.com/api/json/v1/1/filter.php?i=',
  filterByCategory: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=',
  filterByArea: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=',
}

export const navItems = [
  {
    name: 'Categories',
    to: '/categories'
  },
  {
    name: 'Ingredients',
    to: '/ingredients'
  },
  {
    name: 'Areas',
    to: '/areas'
  }
]

export const socialMedia = [
  {
    name: 'Gmail',
    logo: <FiMail />,
    link: 'gmail.com'
  }, {
    name: 'LinkedIn',
    logo: <FiLinkedin />,
    link: 'linkedin.com'
  }, {
    name: 'GitHub',
    logo: <FiGithub />,
    link: 'github.com'
  },
]
