import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SelectedProductsData, RemovedProductsData, AddToCartData } from '../Redux/Action/ProductAction';
import Header from '../../EcommerceProject/Components/Header';
import Footer from '../../EcommerceProject/Components/Footer';

const ProductDetails = () => {

  const { productId } = useParams();


  const item = useSelector((state) => state.item)
  const { image, title, price, category, description, id } = item;
  const dispatch = useDispatch()

  const fetchProductDetail = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(y => {
        dispatch(SelectedProductsData(y))
      })
  }

  useEffect(() => {

    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(RemovedProductsData());
    };

  }, [productId])

  const AddToCart = (ele) => {
    dispatch(AddToCartData(ele))
    alert("Added to Cart")
  }

  return (
    <div>
    {<Header/>}
      {Object.keys(item).length === 0 ? (
        <div className='Loading'>...Loading</div>
      ) : (
        <section className='ProductDetail' key={id}>
          <div className='Image'>
            <img src={image} alt={title} />
          </div>
          <div className='ProductInfo' >
            <h5 className="">{title}</h5>
            <p className="">{category}</p>
            <p className="">{description}</p>
            <p className="">${price}<sup>99</sup></p>
            <button className='Btn' onClick={() => AddToCart(item)}>Add To Cart</button>
          </div>
        </section>
      )}
      <Footer/>
      {/*  */}
    </div>
  )
}

export default ProductDetails
