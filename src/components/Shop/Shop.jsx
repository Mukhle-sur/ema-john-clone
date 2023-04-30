import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const savedCart = [];
    const storedCart = getShoppingCart();
    // step 1: get id
    for (const id in storedCart) {
      // step 2: get the product by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step no 3: get quantity of the product
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved card
        savedCart.push(addedProduct);
      }
      // set 5: set the cart in state
      setCart(savedCart);
    }
  }, [products]);

  const addToHandleCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  const handleDeleteFromCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shopping-container">
      <div className="product-content">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToHandleCart={addToHandleCart}
          ></Product>
        ))}
      </div>
      <div className="cart-content">
        <Cart handleDeleteFromCart={handleDeleteFromCart} cart={cart}>
          <button className="Review-btn">
            <Link to="/Order Review">
              Review Order <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Link>
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
