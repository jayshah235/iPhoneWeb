import React from "react";
import "./index.css";

const Singlebanner = () => {
  return (
    <div className="backimg">
      <div className="content">
        <h2 className="topiccss">Think of phones think of us</h2>
        <h3 className="headfont">Follow us on Instagram</h3>
        <p className="parafont">
          For best offer & daily updates, please follow us on instgarm ,
          facebook , snapchat.
        </p>
        <a href="https://www.apple.com" target="_blank">
        <button className="btnfont">
         Follow Now  </button></a>
      </div>
    </div>
  );
};

export default Singlebanner;
