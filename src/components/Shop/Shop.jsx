import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
            <div className='cart-content'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;