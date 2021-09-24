import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
// import Product from './Product';
import Product from './Product';
import './shop.css';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])
    
    useEffect(() => {
        console.log('product api called ')
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProduct(data)
                console.log('product received')
            })
    }, [])
    // getting local storage data 
    useEffect(() => {
        console.log("local storage called ")
        
        // console.log(savedCart)
       if(products.length){
           const savedCart = getStoredCart()
           const storedCart = []
           for (const key in savedCart) {
            //    console.log(key, savedCart[key])
               
            // console.log(key)
            // console.log(products)
            const addedProduct = products.find(product => product.key === key)
                //   console.log(key, addedProduct)
               if (addedProduct) {
                   const quantity = savedCart[key]
                   addedProduct.quantity = quantity;
                //    console.log(addedProduct)
                   storedCart.push(addedProduct)
               }
                  
           }
           setCart(storedCart)
      }
    }, [products]) // dependency 
    const handleAddToCart = product => {
        // console.log(product.name)
        const newCart = [...cart, product]
        // console.log(newCart)
        setCart(newCart)
        // Save to local storage for now 
        addToDb(product.key)
    }
    // hendling search 
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        // console.log(matchedProducts.length)
        setDisplayProduct(matchedProducts)

    }

    return (
        <>
            <div className="search-container">
                <input type="text"
                    onChange={handleSearch}
                placeholder="Search Your Product"/>
            </div>
            
            
        <div className="shop-container">
            <div className="product-container">
                {/* <h3>Products: {products.length} </h3> */}
                {displayProduct.map(product => <Product
                    key={product.key}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                />)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
            </div>
            </>
    );
};

export default Shop;