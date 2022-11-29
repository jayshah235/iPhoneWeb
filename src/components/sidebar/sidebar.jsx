import { useContext } from "react";
import "./sidebar.css";
import { Itemscontext } from "../contextapi/contextapi";
import { useRef } from "react";

const Sidebar = ({ setSideClick }) => {
  const Addcart = useContext(Itemscontext);
  const handleDelete = (id) => {
    const index = Addcart.items.findIndex((i) => i.id === id);
    Addcart.setItems(Addcart.items.slice(index, 1));
  };

  const itemsPrices = Addcart?.items?.map((i) => i.inCartPrice);
  const total = itemsPrices?.reduce((a, b) => a + b, 0.0);

  const ref = useRef((document.body.style.overflow = "hidden"));

  const setRefscroll = () => {
    ref.current = document.body.style.overflow = "scroll";
  };

  return (
    <div className="posabsolute">
      <section
        className="widopacity"
        onClick={() => {
          setRefscroll();
          setSideClick(false);
        }}
      />
      <section className="posright">
        <div className="sidehead">
          <h4>Shopping Cart</h4>
          <button onClick={() =>{ setSideClick(false); setRefscroll()}}>Close </button>
        </div>
        {Addcart?.items?.map((i, idx) => (
          <div className="dynamicdata" key={idx}>
            <figure className="flex30">
              <img src={i?.image} alt="" />
            </figure>
            <div className="flex70">
              <div className="lineheight">
                <h6>{i.model}</h6>
                <p>{i.size}</p>0
                <div>
                  <span className="additem">1</span>
                  <span className="productprice">
                    {i?.price?.toLocaleString()}
                  </span>
                </div>
              </div>
              <button className="fitcon" onClick={() => {handleDelete(i.id)}}>
                x
              </button>
            </div>
          </div>
        ))}
        <div className="totalflex">
          <h4>Subtotal:</h4>
          <p>&#8377;{total?.toLocaleString()}</p>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
