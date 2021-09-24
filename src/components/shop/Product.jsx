import React from 'react';
import Rating from 'react-rating';
import './product.css';

const product = (props) => {
    // console.log(props.product.name)
    // console.log(props)

    const {name, img, price, stock ,seller,star } = props.product
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4> 
                <p><small>By: {seller}</small></p>
                <p>Price:${price}</p>
                <Rating readonly
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                     fullSymbol="fas fa-star icon-color"/>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=> props.handleAddToCart(props.product)}>Add to Cart</button>
            </div>
            
        </div>
    );
};

export default product;