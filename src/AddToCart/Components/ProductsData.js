import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import '../CSS/style.css'
import { AddToCartData } from '../Redux/Action/ProductAction';

const ProductsData = () => {
  const items = useSelector(y => y.products.product);
  const myReducer = useDispatch();

  const AddToCart = (ele) =>{

      myReducer(AddToCartData(ele))
      // console.log("Cart",ele);
      alert("Added To Cart")
  }

  const RenderList = items.map((items) => {
    const { id, image, title, category, price, description } = items
    return (
      <section className='MAIN' key={id}>

        <div className='CARD' >
          <Link to={`/product/${id}`}>
            <img src={image} alt={title} />
            <h5 className="H1">{title}</h5>
            <p className="">{category}</p>
            {/* <p className="Desc">{description}</p> */}
            <p className="PRICE">${price}<sup>99</sup></p>
          </Link>
          <button className='Btn' onClick={() => AddToCart(items)}>Add To Cart</button>
          <div className='m-4'>
          <Link to="/Cart">GotoCart...</Link>
          </div>
        </div>

      </section>
    )
  })

  return (
    <div className='Main'>{RenderList}</div>
  )
}

export default ProductsData



