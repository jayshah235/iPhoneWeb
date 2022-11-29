import Indexcard from "./indexcard";
import "./card.css";
import { IphonesData } from "../../dynamicdata/iphonedata";

const Iwatchcard = () => {
  const Iwatchdata = IphonesData.filter((i) => i.category === "iwatches");

  return (
    <div className="cardwidth">
      {Iwatchdata?.map((item) => (
        <Indexcard
          key={item.id}
          image={item.image}
          model={item.model}
          price={item.price}
          delprice={item.delprice}
          itemId={item.id}
          size="(44, GPS+CELLULAR)"
        />
      ))}
    </div>
  );
};

export default Iwatchcard;
