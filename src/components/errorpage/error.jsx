import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section className="errorpage">
      <h2>404 </h2>
      <h2>PAGE NOT FOUND</h2>
      <p className="paraerror">
        THE PAGE YOU ARE LOOKING FOR, MIGHT BEEN REMOVED HAD ITS NAME CHANGED OR
        IT IS TEMPORARILY UNAVAILABLE
      </p>
      <p className="parapage">
        <NavLink to="/iphoneweb">Go to homepage</NavLink>
      </p>
    </section>
  );
};

export default Error;
