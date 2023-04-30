import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const OrderReview = () => {
  const savedCart = useLoaderData();
  //   console.log(cart)
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    // console.log(id);
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleDeleteFromCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shopping-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            handleRemoveFromCart={handleRemoveFromCart}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-content">
        <Cart cart={cart} handleDeleteFromCart={handleDeleteFromCart}>
          <button className="Review-btn">
            <Link to="/checkout">
              Proceed Checkout <FontAwesomeIcon icon={faCreditCard} />
            </Link>
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
