import NavIndex from "../navbar";
import Nav2index from "../navbar2";
import Indexmenu from "../dropdownmenu";
import Indexfooter from "../footer";
import Indexcollab from "../collabrations";
import { Outlet } from "react-router-dom";
import TopScroll from "../topscrollbtn";

const Mainpage = () => {
  return (
    <>
      <NavIndex />
      <Nav2index />
      <Indexmenu />
      <Outlet />
      <Indexcollab />
      <TopScroll />
      <Indexfooter />
    </>
  );
};

export default Mainpage;
