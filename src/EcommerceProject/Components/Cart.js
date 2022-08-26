import React, { useState } from 'react'
import '../CSS/Cart.css'
import Home from './Home'

const Cart = (Prop) => {

    const [Counter, setCounter] = useState(1)

    const Plus =() =>{
        setCounter(Counter + 1)
    }

    const Minus = () => {
        if(Counter>0){
        setCounter(Counter - 1)
        }
    }

    return (
        <div>
            <div className='Cart'>
                <div className='Top'>
                    <h2>Shopping Cart</h2>
                    <p className='Price '>Price</p>
                </div>
                {/* {Product.map((element, index) => {
        return ( */}
                <div className='Box'>
                    {/* <div><Home><img src={element.image} /></Home></div> */}
                    <div>
                        <h5 className="">title</h5>
                        <p className="">category</p>
                        <p className="">price</p>
                        <button className='Plus' onClick={Plus}>+</button><span className='Text'>{Counter}</span><button className='Minus' onClick={Minus}>-</button>
                    </div>
                </div>
                {/* )
      })} */}
      <div className='Bottom'><h3>Subtotal ({Counter} item)</h3></div>
            </div>

        </div>
    )
}

export default Cart
