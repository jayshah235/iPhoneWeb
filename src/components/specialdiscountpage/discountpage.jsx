import image from "../images/discountimage.png";
import "./style.css";
import Helmet from 'react-helmet'

const Discountpage = () => {
  return (
    <>
    <Helmet>
      <title>Discount</title>
    </Helmet>
    <figure className="offerimage">

      <img src={image} alt="" />
    </figure>
    </>
  );
};

export default Discountpage;
