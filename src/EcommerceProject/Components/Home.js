import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import Footer from './Footer'
import Header from './Header'
import "../CSS/Mainhome.css"
import ProductsData from '../../AddToCart/Components/ProductListing'
import ProductDetails from '../../AddToCart/Components/ProductDetails'
const Home = () => {

  return (
    <div>
      <Header/>

      <div className='Hero' />
      <div className='Info'>
        <h1>50% Discount</h1>
        <h4>On Electronics</h4>
        <h4>Accessories</h4>
      </div>

      <ProductsData/>
      {/* <ProductDetails/> */}

      <Footer/>

    </div>
  )
}

export default Home
