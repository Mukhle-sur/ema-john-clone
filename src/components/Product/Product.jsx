import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
    // console.log(props)
    const { img, name, price, ratings, seller } = props.product;

    const addToHandleCart = props.addToHandleCart;
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5>{name}</h5>
                <p>Price: $ {price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings} star</p>
            </div>
            <button onClick={() => addToHandleCart(props.product)} className='cart-btn'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;