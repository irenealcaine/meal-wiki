export const requests = {
  randomMeal: 'https://www.themealdb.com/api/json/v1/1/random.php',
  mealByName: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  mealByFirstLetter: 'https://www.themealdb.com/api/json/v1/1/search.php?f=',
  mealDetailsById: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=',
  mealCategories: 'https://www.themealdb.com/api/json/v1/1/categories.php',
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
    name: 'Zones',
    to: '/zones'
  }
]
