import React from "react";
import { useState, useEffect } from "react";

import Lecture from "../comp/Lecture";
import Loading from "../comp/Loading";

const Lectures = ({ match }) => {
  const [lectures, setLectures] = useState({});
  const [loading, setLoading] = useState(true);

  const getLectures = async () => {
    const response = await fetch(
      `https://imsuofkserver.herokuapp.com/api/v1/courses/${match.params.id}`
    );
    const data = await response.json();
    setLectures(data);
    setLoading(false);
  };

  useEffect(() => {
    getLectures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <main>
        <div className="cont">
          {lectures.lectures.map((lec) => (
            <Lecture key={lec.id} {...lec} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Lectures;
