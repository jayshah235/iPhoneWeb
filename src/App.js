import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";
import Menu from "./components/dropdownmenu";
import Bannerslider from "./components/bannerslider";
import Support from "./components/customersupport";
import Phones from "./components/phonessection.jsx/phones.jsx";
import Singlebanner from "./components/singlebanner";
import Collab from "./components/collabrations";
import Footer from "./components/footer";
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
import ScrollToTop from "./components/scrolltotop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Componentlist />} />
        <Route path="/iphoneweb" element={<Mainpage />}>
          <Route index element={<Homepage />} />
          <Route path="index" element={<Navbar />} />
          <Route path="navbar" element={<Navbar2 />} />
          <Route path="indexmenu" element={<Menu />} />
          <Route path="banner" element={<Bannerslider />} />
          <Route path="support" element={<Support />} />
          <Route path="phones" element={<Phones />} />
          <Route path="singlebanner" element={<Singlebanner />} />
          <Route path="iphones" element={<Indexphonebanner />} />
          <Route path="collabrations" element={<Collab />} />
          <Route path="discounts" element={<Discountpage />} />
          <Route path="footer" element={<Footer />} />
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
