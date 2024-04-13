import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Pages/Home/Home'
import Layout from './Components/Layout/Layout';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
