import "./styles.css";
import { Itemscontext } from "../contextapi/contextapi";
import { useContext, useState } from "react";
import { IphonesData } from "../../dynamicdata/iphonedata";
import { useParams } from "react-router-dom";

const Airpods3 = (props) => {
  const [qty, setQty] = useState(1);
  const Addcart = useContext(Itemscontext);
  const { itemId } = useParams();
  const productData = IphonesData?.find((i) => i.id === itemId);
  // const productQty = localStorage
  return (
    <>
      <div className="pagemain">
        <figure className="airpodsimg">
          <img src={productData?.image} alt="" />
        </figure>
        <div className="airpodscontent">
          <h3 className="fontsz">{productData?.model}</h3>
          <h6 className="font10">(Color option at checkout page)</h6>
          <div className="price">
            &#8377;
            {!!productData?.price ? productData?.price?.toLocaleString() : ""}
            <del className="delprice">
              {!!productData?.delprice ? productData?.delprice : ""}
            </del>
          </div>
          <div className="ordermain">
            <div className="numberorder">
              QTY :
              <input
                type="number"
                min={1}
                max={100}
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </div>
            <button
              className="orderbtn"
              onClick={() => {
                Addcart?.setItems([
                  ...Addcart?.items,
                  ...([{ ...productData, inCartPrice: productData?.price * qty }]),
                ]);
              }}
            >
              Add to cart
            </button>
          </div>
          {!!productData?.showChildren && (
            <p className="para14font">
              - Active Noise Cancellation blocks outside noise, so you can
              immerse yourself in music
              <br />
              - Transparency mode for hearing and interacting with the world
              around you
              <br />
              - Spatial audio with dynamic head tracking places sound all around
              you
              <br />
              - Adaptive EQ automatically tunes music to your ears
              <br />
              - Three sizes of soft, tapered silicone tips for a customisable
              fit
              <br />
              - Force sensor lets you easily control your entertainment, answer
              or end calls, and more
              <br />- Sweat and water resistant
            </p>
          )}
          <img src={productData?.specsimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Airpods3;
