import "./navbar2.css";
import images from "../applelogo.png";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Itemscontext } from "../contextapi/contextapi";
import Sidebar from "../sidebar/sidebar";

const Navbar2 = () => {
  const Parentdata = useContext(Itemscontext);

  const [sideClick, setSideClick] = useState(false);
  const itemsPrices = Parentdata.items.map((i) => i.inCartPrice);
  const total = itemsPrices.reduce((a, b) => a + b, 0.0);

  const clickData = () => {
    setSideClick(true);
  };

  return (
    <>
      <div className="nav2wid">
        <div className="margin">
          <div className="imgleft">
            <NavLink to="/iphoneweb">
              <img src={images} alt="" />
            </NavLink>
          </div>
          <div className="buyright">
            <div className="border-right">
              <span className="topfont">Track </span>
              <span className="bottomfont">Your order</span>
            </div>
            <div className="flex-column" onClick={clickData}>
              <span className="topfont">Shopping </span>
              <span className="bottomfont">&#8377;{parseInt(total)}</span>
            </div>
          </div>
        </div>
        {sideClick && <Sidebar setSideClick={setSideClick} />}
      </div>
    </>
  );
};

export default Navbar2;
