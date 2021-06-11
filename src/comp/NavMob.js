import React from "react";
import "../css/navMob.css";


const NavMob = ({ clicked, Taggle }) => {
  return (
    <div className="menu-cont humb">
      <button onClick={Taggle} className="menu-btn"></button>
      <>
        {!clicked ? (
          <div className="sup">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        ) : (
          <div className=" sup2">
            <div className="bar rotat"></div>
            <div className="bar rotat2"></div>
          </div>
        )}
      </>
    </div>
  );
};

export default NavMob;
