import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes, } from "react-router-dom";

import ProductDetails from './AddToCart/Components/ProductDetails';
import ProductListing from './AddToCart/Components/ProductListing'

import EcommerceRegistration from './EcommerceProject/EcommerceRegistration';
import EcommerceLogin from './EcommerceProject/EcommerceLogin';
import Home from './EcommerceProject/Components/Home';
import Cart from './EcommerceProject/Components/Cart';

function App() {/*  */

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EcommerceLogin />}></Route>
          <Route path='/EcommerceLogin' element={<EcommerceLogin />}></Route>
          <Route path='/EcommerceRegistration' element={<EcommerceRegistration />}></Route>
          {/* <Route path='/' element={<Home />}></Route> */}
          <Route path='/Home' element={<Home />}></Route>
          <Route path="/ProductListing"  element={<ProductListing/>} />
          <Route path="/product/:productId"  element={<ProductDetails/>} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
