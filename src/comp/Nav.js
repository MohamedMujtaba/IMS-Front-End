import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/LMS (3).png";
import NavMob from "./NavMob";
import  {AiOutlineHome} from 'react-icons/ai'
import  {BiLogIn} from 'react-icons/bi'
import  {BsInfoCircle} from 'react-icons/bs'
import  {IoSchoolOutline} from 'react-icons/io5'

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
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/login">Registre</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="nav" style={clicked ? {'transform': 'scaleX(1)'} : {'transform':'scaleX(0)'}} className='show'>
        <ul>
          <li>
          <AiOutlineHome/>
            <Link to="/"> Home</Link>
          </li>
          <li>
          <IoSchoolOutline/>
            <Link to="/courses"> Courses</Link>
          </li>
          <li>
          <BiLogIn/>
            <Link to="/login">Registre</Link>
          </li>
          <li>
          <BsInfoCircle/>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
