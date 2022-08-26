import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import Footer from './Footer'
import Header from './Header'
import "../CSS/Mainhome.css"

const Home = () => {

  const AddToCart = (myindex) => {
   
    
    }
  

  return (
    <div>
      <Header />

      <div className='Hero' />
      <div className='Info'>
        <h1>50% Discount</h1>
        <h4>On Electronics</h4>
        <h4>Accessories</h4>
      </div>

      <Footer />

    </div>
  )
}

export default Home
