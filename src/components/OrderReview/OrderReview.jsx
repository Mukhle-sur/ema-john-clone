import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";
import { removeFromDb } from "../../utilities/fakedb";

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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
