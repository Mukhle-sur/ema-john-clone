import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { img, name, price, id, quantity } = product;
  return (
    <div className="review-item">
      <div className="review-content">
        <img src={img} alt="" />
        <div className="content">
          <h4>{name}</h4>
          <p className="spacing">
            Price: <span className="price">${price}</span>
          </p>
          <p>
            Product Quantity: <span className="price">{quantity}</span>
          </p>
        </div>
        <button
          onClick={() => handleRemoveFromCart(id)}
          className="button-style"
        >
          {" "}
          <FontAwesomeIcon className="icon-style" icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
