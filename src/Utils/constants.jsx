import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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

export const descriptions = {
  home:
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat vel perspiciatis ducimus, asperiores, libero vero nobis quibusdam a inventore totam porro voluptate, unde excepturi perferendis. Autem soluta libero recusandae!
      Tempore recusandae illo quasi maiores. Esse pariatur dolores aliquam? Suscipit consectetur, sapiente ratione aliquam ad consequuntur mollitia quasi veritatis nihil consequatur fugit facilis, doloremque provident illo. Architecto enim reiciendis praesentium.</p>,

  ingredients:
    <p>Are you trying to pinpoint specific ingredients for your next culinary creation? Start off with essentials like <Link to={'/ingredients/Onion'}>onions</Link>, move on to a hearty course with <Link to={'/ingredients/Beef'}>beef</Link>, and add a finishing touch with <Link to={'/ingredients/Avocado'}>avocado</Link> in your salads or <Link to={'/ingredients/Rice'}>rice</Link> as a side. If you're into poultry, consider incorporating <Link to={'/ingredients/Eggs'}>eggs</Link> into your dishes, or if you are a fan of vegetarian options, experiment with diverse recipes using <Link to={'/ingredients/Potatoes'}>potatoes</Link>. We cater to all preferences! Additionally, our pantry section includes a variety of other essential ingredients to spice up any meal.</p>,

  areas:
    <p>Looking to explore different culinary regions through your cooking? Start your journey with robust <Link to={`/areas/American`}>American</Link> dishes, sail across to <Link to={`/areas/Italian`}>Italy</Link> for a pasta or risotto night, and then venture to <Link to={`/areas/Japanese`}>Japan</Link> for some exquisite sushi or ramen. Don’t forget to tour the wonderful flavors of <Link to={`/areas/Spanish`}>Spain</Link> with a traditional paella, and if you're feeling adventurous, give <Link to={`/areas/British`}>British</Link> cuisine a try with some classic fish and chips or a hearty pie. We have recipes and ingredients from all over the globe to satisfy every palate! Plus, there's even a section dedicated to international miscellany for the curious chef.</p>,

  categories:
    <p>Looking for something specific to cook? You can start with an <Link to={'/categories/Starter'}>starter</Link>, continue with an exquisite <Link to={'/categories/Pasta'}>pasta</Link> dish, and finish with a <Link to={'/categories/Dessert'}>dessert</Link>. If you are a meat lover, you can check out our selection of <Link to={'/categories/Beef'}>beef</Link> dishes, or alternatively, take a look at our <Link to={'/categories/Vegan'}>vegan</Link> plates. There's something for everyone! There's even a <Link to={'/categories/Miscellaneous'}>miscellaneous</Link> section.</p>

}
