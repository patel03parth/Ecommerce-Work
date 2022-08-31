import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AddToCartData } from '../../AddToCart/Redux/Action/ProductAction'
import '../CSS/Cart.css'


const Cart = () => {

    const { productId } = useParams();
    const item = useSelector((state) => state.products.Carts)

    const dispatch = useDispatch()

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(y => {
                dispatch(AddToCartData(y))
            })

    }, [productId])

    const [Counter, setCounter] = useState(1)

    const Plus = (price) => {
        setCounter(Counter + 1)
    }

    const Minus = (price) => {
        if (Counter > 1) {
            setCounter(Counter - 1)
        }
    }

    return (
        <div>
            <div className='Cart'>
                <div className='Top'>
                    <h2>Shopping Cart</h2>
                    <p className='Price'>Price</p>
                </div>
                {item.map((item) => {
                    const { image, title, price, category, description, id } = item;
                    return (
                        <div className='Box' key={id}>
                            <div><img src={image} /></div>
                            <div className='Detail'>
                                <div className='width'>
                                    <h5 className="title">{title}</h5>

                                    <p className="stock">In stock</p>
                                    <div>
                                        <button className='Plus' onClick={() => Plus(price)}>+</button><span className='Text'>{Counter}</span><button className='Minus' onClick={() => Minus(price)}>-</button>
                                    </div>
                                </div>
                                <div>
                                    <p className="price">${price}</p>
                                </div>

                            </div>
                        </div>
                    )
                })}
                <div className='Bottom'><h3>Subtotal({})</h3></div>
            </div>

        </div>
    )
}

export default Cart
