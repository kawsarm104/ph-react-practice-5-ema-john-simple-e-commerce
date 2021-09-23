import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
// import Product from './Product';
import Product from './Product';
import './shop.css';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleAddToCart = product => {
        console.log(product.name)
        const newCart = [...cart, product]
        // console.log(newCart)
        setCart(newCart)
        // Save to local storage for now 
        addToDb(product.key)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {/* <h3>Products: {products.length} </h3> */}
                {products.map(product => <Product
                    key={product.key}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                />)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;