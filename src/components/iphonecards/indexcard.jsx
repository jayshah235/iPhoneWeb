import "./card.css";
import { NavLink } from "react-router-dom";

const Indexcard = (props) => {
  const {
    image,
    model,
    price,
    delprice,
    price2,
    delprice2,
    price3,
    delprice3,
    size,
    size2,
    size3,
    itemId,
  } = props;

  return (
    <div className="maincard">
      <div className="flexcard">
        <div className="imgflex">
          <img src={image} alt="" />
        </div>
        <div className="fixheight">
          <h5 className="fonthead">{model}</h5>
          <p className="color26c">(Color option at checkout page)</p>
          <div className="priceflex">
            <p className="pricefont"> &#8377;{price}</p>
            <del className="delfont">{delprice}</del>
            {size}
          </div>
          <div className="priceflex">
            <p className="pricefont">{price2}</p>
            <del className="delfont">{delprice2}</del>
            {size2}
          </div>
          <div className="priceflex">
            <p className="pricefont">{price3}</p>
            <del className="delfont">{delprice3}</del>
            {size3}
          </div>
        </div>
        <NavLink to={`${itemId}`} className="cardbtn">
          ADD TO CART
        </NavLink>
      </div>
    </div>
  );
};

export default Indexcard;
