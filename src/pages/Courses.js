/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
// comp
import Course from "../comp/Course";
import Loading from "../comp/Loading";
// import data from "../data";
import "../css/course.css";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCourses = async () => {
    const response = await fetch(
      "https://imsuofkserver.herokuapp.com/api/v1/courses"
    );
    const data = await response.json();
    setCourses(data);
    setLoading(false);
  };

  useEffect(() => {
    getCourses();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="disp">
      <div className="cont">
        {courses.map((cor) => (
          <Course key={cor.id} {...cor} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
