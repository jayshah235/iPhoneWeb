import "./menu.css";
import { Link, NavLink } from "react-router-dom";
import { IphonesData } from "../../dynamicdata/iphonedata";

const Menu = () => {

  const airPodsData = IphonesData.filter((i) => i.category === 'aripods');

const iwatchData = IphonesData.filter((i) => i.category === 'iwatches')

  return (
      <div className="mainmenu">
        <div className="menu">
          <span className="homeactive">
            <Link to="/iphoneweb">Home</Link>
          </span>
          <span className="phonesdropdown">
            <NavLink to="iphonecard/">IPhone</NavLink>
            <div className="dropmenu">
              <ul>
                {IphonesData?.slice(0, 10)?.map((item, index) => (
                  <li key={index}>
                    <NavLink to={`iphonecard/${item.id}`}>{item.model}</NavLink>
                  </li>
                ))}
              </ul>
              <ul>
                {IphonesData?.slice(10, 20)?.map((item, idx) => (
                  <li key={idx}>
                    <NavLink to={`iphonecard/${item.id}`}>{item.model}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </span>
          <span className="afterclass2">
            <NavLink to="iwatchcard">IWatches</NavLink>
            <div className="dropmenu">
              <ul>
                {iwatchData?.map((item, ind)=> (
                <li key={ind}>
                  <NavLink to={`iwatchcard/${item.id}`}>{item.model} </NavLink>
                </li>
                ))}
              </ul>
            </div>
          </span>
          <span className="afterclass">
            <NavLink to="airpodscard">Airpods</NavLink>
            <div className="dropmenu">
              <ul className="droplist">
                {airPodsData?.map((item,idx) => (
                <li key={idx}>
                <NavLink to={`airpodscard/${item.id}`}>{item.model}</NavLink>
              </li>
                ))}
              </ul>
            </div>
          </span>
          <span>
            <NavLink to="">Accessories </NavLink>
          </span>
          <span>
            <NavLink to="">About us</NavLink>
          </span>
          <span className="activenone">
            <NavLink to="discounts">Special discount</NavLink>
          </span>
        </div>
      </div>
  );
};

export default Menu;
