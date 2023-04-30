import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cart, handleDeleteFromCart, children }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    totalPrice = (totalPrice + product.price) * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const totalTax = (totalPrice * 9) / 100;
  const grandTotal = totalPrice + totalShipping + totalTax;
  return (
    <div className="cart">
      <h2>Order Summary </h2>
      <div className="cart-info">
        <p>Selected items : {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${totalTax.toFixed(2)}</p>
        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      </div>
      <div className="Cart-button">
        <button onClick={handleDeleteFromCart}>
          Clear Cart{" "}
          <FontAwesomeIcon className="icon-style" icon={faTrashAlt} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
