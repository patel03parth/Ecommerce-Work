import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  Route, BrowserRouter, Link, Routes,} from "react-router-dom";

import EcommerceRegistration from './EcommerceProject/EcommerceRegistration';
import EcommerceLogin from './EcommerceProject/EcommerceLogin';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/EcommerceLogin' element={<EcommerceLogin/>}></Route>
          <Route path='/EcommerceRegistration' element={<EcommerceRegistration/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
