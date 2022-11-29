import React from "react";
import { useRef } from "react";
import "./style.css";

const Navbar = () => {
  const toggleRef = useRef();

  const refDarkMode = () => {
    toggleRef(
      (document.body.style.background = "#000000"),
      (document.body.style.color = " white")
    );
  };
  const refNormalMode = () => {
    toggleRef(
      (document.body.style.background = "#fefefe"),
      (document.body.style.color = " black")
    );
  };

  return (
    <>
      <div className="border">
        <div className="main">
          <div className="left">
            <h3>
              Dispatch in 48 Hours (working days) - T+1 days. Think of Phones
              Think of us
            </h3>
          </div>
          <div className="modebtn">
            <button onClick={refDarkMode}>Dark Mode</button>
            <button onClick={refNormalMode}>Normal Mode</button>
          </div>
          <div className="right">
            <ul>
              <li>Contact Us</li>
              <li>Help</li>
              <li>Bulk order</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
