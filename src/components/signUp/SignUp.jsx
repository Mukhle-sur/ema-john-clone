import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    setError("");
    if (password !== confirm) {
      setError("Password does not match");
    } else if (password <= 6) {
      setError("password must be six charecter of more");
    }

    createUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="from-container">
      <h2 className="from-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="password2" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p className="login-info">
        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
