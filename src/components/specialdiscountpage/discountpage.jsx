import image from "../images/discountimage.png";
import "./style.css";
import Helmet from 'react-helmet'

const Discountpage = () => {
  return (
    <>
    <Helmet>
      <title>test</title>
      <meta name="description" content="hilhjl,nk,,hn" />
    </Helmet>
    <figure className="offerimage">

      <img src={image} alt="" />
    </figure>
    </>
  );
};

export default Discountpage;
