import { NavLink } from "react-router-dom";
import "./component.css";

const Componentlist = () => {
  return (
    <>
      <div className="listdesign">
        <h2 className="appheading">Iphone web application components</h2>
        <div className="listwid">
          <div>
            <h3>Footer</h3>
            <ol>
              <li>
                <NavLink to="iphoneweb/footer"> Footer 1 </NavLink>{" "}
              </li>
            </ol>
            <h3>Apple Banners</h3>
            <ol>
              <li>
                <NavLink to="iphoneweb/airpodpage"> Airpods Banner </NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphonebanner"> Iphone Banner </NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iwatchpage"> Iwatch Banner </NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/banner"> BannerSlider </NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/singlebanner"> Single banner </NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphones"> Apple collection </NavLink>{" "}
              </li>
            </ol>
            <h3>Navbar Menu</h3>
            <ol>
              <li>
                <NavLink to="iphoneweb/index"> Navbar 1 </NavLink>
              </li>
              <li>
                <NavLink to="iphoneweb/navbar"> Navbar 2 </NavLink>
              </li>
              <li>
                <NavLink to="iphoneweb/indexmenu"> Dropdown menu </NavLink>
              </li>
            </ol>
            <h3>Cards</h3>
            <ol>
              <li>
                <NavLink to="iphoneweb/iphonecard"> Iphone cards</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iwatchcard"> Iwatch cards</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/airpodscard"> Airpods cards</NavLink>{" "}
              </li>
            </ol>
          </div>
          <div>
            <h3>Product Pages</h3>
            <ol>
              <li>
                <NavLink to="iphoneweb/iphone7"> Iphone 7</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone7plus"> Iphone 7 PLus</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone8"> Iphone 8</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone8plus"> Iphone 8 Plus</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphonex"> Iphone X</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphonexr"> Iphone XR</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphonexs"> Iphone XS</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone11pro"> Iphone 11 pro</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone11promax">
                  {" "}
                  Iphone 11 Pro Max
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone12mini"> Iphone 12 mini</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone12"> Iphone 12</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone12pro"> Iphone 12 Pro</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone12promax">
                  {" "}
                  Iphone 12 Pro Max
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone13mini"> Iphone 13 Mini</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone13"> Iphone 13 </NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone13pro"> Iphone 13 Pro</NavLink>{" "}
              </li>
              <li>
                <NavLink to="iphoneweb/iphone13promax">
                  Iphone 13 Pro Max
                </NavLink>
              </li>
              <li>
                <NavLink to="iphoneweb/iphonese"> Iphone SE</NavLink>{" "}
              </li>
            </ol>
            <h3>Form validation</h3>
            <ol>
              <li>
                <NavLink to="iphoneweb/form">Entry Form</NavLink>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Componentlist;
