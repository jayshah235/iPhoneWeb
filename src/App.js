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
import Mainpage from "./components/mainpage/mainpage";
import Error from "./components/errorpage/error";
import Homepage from "./components/homepage/homepage";
import Discountpage from "./components/specialdiscountpage/discountpage";
import Airpodsbanner from "./components/applebanners/airpodsbanner";
import Iphonebanner2 from "./components/applebanners/iphonebanner";
import Iwatchbanner from "./components/applebanners/iwatchbanner";
import Iphonespage from "./components/iphonespage/iphonespage";
import Iphonecard from "./components/iphonecards/iphonecard";
import Componentlist from "./component_list/componentlist";
import Iwatchcard from "./components/iphonecards/iwatchcard";
import Iwatchespage from "./components/iwatchpage/iwatchpage";
import Airpodscard from "./components/iphonecards/airpodscard";
import Airpodspage from "./components/airpodspage/airpodspage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formvalidation from "./components/formvalidation/formvalidation";
import Airpods3 from "./components/productspages/airpods3";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Componentlist />} />
        <Route path="/iphoneweb" element={<Mainpage />}>
          <Route index element={<Homepage />} />
          <Route path="index" element={<NavIndex />} />
          <Route path="navbar" element={<Nav2index />} />
          <Route path="indexmenu" element={<Indexmenu />} />
          <Route path="banner" element={<Indexbanner />} />
          <Route path="support" element={<Indexsupport />} />
          <Route path="phones" element={<Indexphones />} />
          <Route path="singlebanner" element={<Indexsingleban />} />
          <Route path="iphones" element={<Indexphonebanner />} />
          <Route path="collabrations" element={<Indexcollab />} />
          <Route path="discounts" element={<Discountpage />} />
          <Route path="footer" element={<Indexfooter />} />
          <Route path="airpodpage" element={<Airpodsbanner />} />
          <Route path="iphonebanner" element={<Iphonebanner2 />} />
          <Route path="iwatchpage" element={<Iwatchbanner />} />
          <Route path="iphonecard" element={<Iphonecard />} />
          <Route path="iphonecard/:itemId" element={<Airpods3 />} />
          <Route path="airpodscard/:itemId" element={<Airpods3 />} />
          <Route path="iwatchcard/:itemId" element={<Airpods3 />} />
          <Route path="iwatchcard" element={<Iwatchcard />} />
          <Route path="airpodscard" element={<Airpodscard />} />
          <Route path="iphonespage" element={<Iphonespage />} />
          <Route path="iwatchespage" element={<Iwatchespage />} />
          <Route path="airpodspage" element={<Airpodspage />} />
          <Route path="form" element={<Formvalidation />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
