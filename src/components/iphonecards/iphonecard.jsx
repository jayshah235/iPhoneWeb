import Indexcard from "./indexcard";
import "./card.css";
import { IphonesData } from "../../dynamicdata/iphonedata";

const Iphonecard = () => {

  const iphoneCategory = IphonesData.filter((i) => i.category === 'iphones');

  return (
    <>
    <div>
      <div className="cardwidth">
      {iphoneCategory.map ((item ) => (
        <Indexcard 
          key={item.id}
          image={item.image}
          model={item.model}
          price={item.price}
          delprice={item.delprice}
          size={item.size}
          price2={item.price2}
          delprice2={item.delprice2}
          size2={item.size2}
          price3={item.price3}
          delprice3={item.delprice3}
          size3={item.size3}
          itemId={item.id}
        />     
        ))}
         </div>
        </div>
    </>
  );
};

export default Iphonecard;
