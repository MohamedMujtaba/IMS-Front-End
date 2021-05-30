import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/page.css";

const Lecture = ({ id, title, dec }) => {
  const [more, setMore] = useState(false);
  const moreTaggle = () => {
    setMore((prevMore) => !prevMore);
  };

  return (
    <>
      <div className="lecture-info">
        <Link to={`/courses/lecture/${id}`}>
          <h3 className="title">{title}</h3>
        </Link>
        {/* <p>{id}</p> */}
        <p>
          {more ? dec : dec.slice(0, 120)}
          {dec.length > 100 && (
            <button className="btn-more" onClick={moreTaggle}>
              {more ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      </div>
    </>
  );
};

export default Lecture;
