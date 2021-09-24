import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    // console.log(props.cart)
    const { cart } = props
    let totalQuantity = 0
    let total = 0;
    for (const product of cart) {
        if (!product.quantity){
            product.quantity = 1;
        }
        console.log("carrt",product)
        total = total + (product.price*product.quantity)
        totalQuantity = totalQuantity+product.quantity
    }
    return (
        <div>
               <h2>Order Summary</h2>
            <h3>Items Ordered: {totalQuantity}</h3>
            <h4>Total Price: ${total.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;