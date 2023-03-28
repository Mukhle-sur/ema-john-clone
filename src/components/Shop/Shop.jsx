import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToHandleCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shopping-container'>
            <div className='product-content'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToHandleCart={addToHandleCart}
                    ></Product>)
                }
            </div>
            <div className='chart-content'>
                <h2>Order Summary </h2>
                <p>Select item : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;