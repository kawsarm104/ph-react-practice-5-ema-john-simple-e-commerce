import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props
    let total = 0;
    for (const product of cart) {
        total = total+product.price
    }
    return (
        <div>
               <h2>Order Summary</h2>
            <h3>Items Ordered: {props.cart.length}</h3>
            <h4>Total Price: ${total.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;