import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetProductData} from '../Redux/Action/ProductAction';
import ProductsData from './ProductsData';


const ProductListing = () => {

    const data = useSelector((state) => state)
    // console.log("data:" ,data);
    const myDis = useDispatch();


    useEffect(()=> {

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(y=>{
                myDis(GetProductData(y))
            })

    },[])

  return (
    <div>{<ProductsData/>}</div>
  )
}

export default ProductListing