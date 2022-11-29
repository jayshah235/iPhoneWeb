import Indexbanner from "../bannerslider";
import Indexsupport from "../customersupport";
import Indexphones from "../phonessection.jsx/phones.jsx";
import Indexsingleban from "../singlebanner";
import Indexphonebanner from "../iphonebanner";
import Helmet from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Apple</title>
        <meta
          name="description"
          content="Discover the innovative world of Apple and shop everything iPhone, 
          iPad, Apple Watch, Mac, and Apple TV, plus explore accessories,
           entertainment, and expert device support."
        />
      </Helmet>
      <Indexbanner />
      <Indexsupport />
      <Indexphones />
      <Indexsingleban />
      <Indexphonebanner />
    </>
  );
};

export default Homepage;
