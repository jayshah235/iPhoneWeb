import NavIndex from "./components/navbar";
import Nav2index from "./components/navbar2";
import Indexmenu from "./components/dropdownmenu";
import Indexbanner from "./components/bannerslider";
import Indexsupport from "./components/customersupport";
import Indexphones from "./components/phonessection.jsx";
import Indexsingleban from "./components/singlebanner";
import Indexcollab from "./components/collabrations";
import Indexfooter from "./components/footer";
import Indexphonebanner from "./components/iphonebanner";
import Indexairpods3 from "./components/airpods3page/indexairpods";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/mainpage/mainpage";
import Error from "./components/errorpage/error";
import Homepage from "./components/homepage/homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/iphoneweb" element={<Mainpage />}> 
          <Route index element={<Homepage />} /> 
          <Route path="index" element={<NavIndex />} />
          <Route path="navbar" element={<Nav2index />} />
          <Route path="indexmenu" element={<Indexmenu />} />
          <Route path="banner" element={<Indexbanner />} />
          <Route path="support" element={<Indexsupport />} />
          <Route path="phones" element={<Indexphones />} />
          <Route path="singlebanner" element={<Indexsingleban />} />
          <Route path="/iphoneweb/iphones" element={<Indexphonebanner />} />
          <Route path="collabrations" element={<Indexcollab />} />
          <Route path="iphoneweb/airpods" element={<Indexairpods3 />} />
          <Route path="footer" element={<Indexfooter />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
