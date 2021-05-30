import React from "react";
import "../css/login.css";
import logo from "../img/LMS (3).png";

const Login = () => {
  return (
    <>
      <section>
        <div className="login-cont">
          <a href="index.html">
            <img className="logo" src={logo} alt="" />
          </a>
          <div className="input-handler">
            <label for="university ID">University ID</label>
            <input type="number" name="university ID" />
          </div>
          <div className="input-handler">
            <label for="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="input-handler">
            <button type="submit">Login</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
