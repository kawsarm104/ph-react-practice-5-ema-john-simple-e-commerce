import React from 'react';
import './product.css'
const product = (props) => {
    // console.log(props.product.name)
    // console.log(props)

    const {name, img, price, stock ,seller } = props.product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4> 
                <p><small>By: {seller}</small></p>
                <p>Price:${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=> props.handleAddToCart(props.product)}>Add to Cart</button>
            </div>
            
        </div>
    );
};

export default product;