/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Course = ({ id, name, image }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="" className="img-titel" />
        <h3>{name}</h3>
        <Link to={`/courses/lectures/${id}`} className="btn">
          Enroll
        </Link>
      </div>
    </>
  );
};

export default Course;
