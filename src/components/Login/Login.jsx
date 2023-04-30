import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="from-container">
      <h2 className="from-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id="password"
            required
          />
          <p onClick={() => setShow(!show)}>
            <small>
              {show ? <span>Hide password</span> : <span>Show Password</span>}
            </small>
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p className="login-info">
        <small>
          New to Ema-john? <Link to="/signUp">Create New Account</Link>
        </small>
      </p>
      <p>{error}</p>
    </div>
  );
};

export default Login;
