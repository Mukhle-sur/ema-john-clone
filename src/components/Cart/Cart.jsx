import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const totalTax = totalPrice * 9 / 100;
    const grandTotal = totalPrice + totalShipping + totalTax;
    return (
        <div className='cart'>
            <h2>Order Summary </h2>
            <div className='cart-info'>
                <p>Selected items : {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${totalTax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
            <div className='Cart-button'>
                <button>Clear Cart</button>
                <button style={{ backgroundColor: '#FF9900', marginTop: '20px' }}>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;