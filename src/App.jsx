import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Pages/Home/Home'
import Layout from './Components/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';
import Categories from './Pages/Categories/Categories';
import CategoryList from './Pages/CategoryList/CategoryList';
import Ingredients from './Pages/Ingredients/Ingredients';
import IngredientList from './Pages/IngredientList/IngredientList';
import Areas from './Pages/Areas/Areas';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:category" element={<CategoryList />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/ingredients/:ingredient" element={<IngredientList />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
