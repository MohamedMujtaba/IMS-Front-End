import React from "react";
import { Link } from "react-router-dom";
import svgImg from "../img/book1.svg";
function Home() {
  return (
    <header>
      <div className="cont">
        <div className="hero">
          <div className="left">
            <div className="hero-typo flex-column">
              <div className="heading">
                <h1> Welcome To</h1>
                <h1> UOFK Online courses</h1>
              </div>
              <p>
                If you are a student please login to involve in the courses.
              </p>
              <p>
                If you face any problem in registration, Contact the responsible
                supervisor of your department.
              </p>
            </div>
            <Link className="btn " to="/login">
              login
            </Link>
          </div>
          <div className="right">
            <img className="svgImg" src={svgImg} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
