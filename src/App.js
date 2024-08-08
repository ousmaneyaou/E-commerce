import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Shop from './Pages/Shop';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import bannerOrdi from './Components/Assets/bannerOrdi.avif'
import bannerTel from './Components/Assets/bannerTel.jpg'
import bannerEcout from './Components/Assets/bannerEcout.jpeg'
import bannerMOntre from './Components/Assets/bannerWat.avif'
import bannerTab from './Components/Assets/bannerTab.jpg'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/ordinateurs" element={<Category banner={bannerOrdi} category="ordinateur" />} />
          <Route path="/telephones" element={<Category banner={bannerTel} category="telephone" />} />
          <Route path="/tablettes" element={<Category banner={bannerTab} category="tablette" />} />
          <Route path="/montres" element={<Category banner={bannerMOntre} category="montre" />} />
          <Route path="/ecouteurs" element={<Category banner={bannerEcout} category="ecouteur" />} />
          <Route path="/product">
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
