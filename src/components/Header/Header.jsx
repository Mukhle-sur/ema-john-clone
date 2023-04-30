import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="header-area">
      <img src={logo} alt="" />
      <div className="menu-list">
        <Link to="/">Order</Link>
        <Link to="/Order Review">Order Review</Link>
        <Link to="/Manage Inventory">Manage Inventory</Link>
        <Link to="/Login">Login</Link>
        <Link to="/signUp">Sign Up</Link>

        {user && (
          <span className="user-info">
            Welcome {user.email}
            <button onClick={handleLogOut} className="btn-out">
              Sign Out
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
