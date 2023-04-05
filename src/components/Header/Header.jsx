import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-area">
      <img src={logo} alt="" />
      <div className="menu-list">
        <Link to="/">Order</Link>
        <Link to="/Order Review">Order Review</Link>
        <Link to="/Manage Inventory">Manage Inventory</Link>
        <Link to="/Login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
