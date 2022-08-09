import "./styles.css";
import image1 from "../images/airpods3.png";

const Airpods3 = () => {
  return (
    <>
      <div className="pagemain">
        <figure className="airpodsimg">
          <img src={image1} alt="" />
        </figure>
        <div className="airpodscontent">
          <h3 className="fontsz">Airpods Pro</h3>
          <h6 className="font10">(Color option at checkout page)</h6>
          <div className="price">
          ₹14500 
            <del className="delprice">₹18850</del>
          </div>
          <div className="ordermain">
            <div className="numberorder">
              QTY :
              <input type="tel" min={1} max={100} defaultValue={1}/>
            </div>
            <button className="orderbtn">Add to cart</button>
          </div>
					<p className="para14font">
					- Active Noise Cancellation blocks outside noise, so you can immerse yourself in music
					<br />
- Transparency mode for hearing and interacting with the world around you
<br />
- Spatial audio with dynamic head tracking places sound all around you
<br />
- Adaptive EQ automatically tunes music to your ears
<br />
- Three sizes of soft, tapered silicone tips for a customisable fit
<br />
- Force sensor lets you easily control your entertainment, answer or end calls, and more
<br />
- Sweat and water resistant
					</p>
        </div>
      </div>
    </>
  );
};

export default Airpods3;
