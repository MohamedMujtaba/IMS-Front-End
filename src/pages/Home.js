import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="intro">
        <h1>Welcome To UOFK Online courses</h1>
        <p>If you are a student please login to involve in the courses</p>
        <p>
          If you face any problem in registration , please contact the
          responsible supervisor of your department
        </p>
        <Link className="btn " to="/login">
          login
        </Link>
      </div>
    </>
  );
}

export default Home;
