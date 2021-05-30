import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/LMS (3).png";
import NavMob from "./NavMob";
const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const Taggle = () => {
    setClicked((prevMore) => !prevMore);
  };
  return (
    <>
      <nav className="navbar">
        <div className="cont">
          <Link className="logo-cont" to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
          <NavMob clicked={clicked} Taggle={Taggle} />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">courses</Link>
            </li>
            <li>
              <Link to="/login">registre</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={clicked ? `dash show` : `dash not-show`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">courses</Link>
          </li>
          <li>
            <Link to="/login">registre</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
