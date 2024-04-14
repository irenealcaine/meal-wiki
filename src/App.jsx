import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Pages/Home/Home'
import Layout from './Components/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';
import Categories from './Pages/Categories/Categories';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
