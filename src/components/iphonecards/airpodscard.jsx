import Indexcard from "./indexcard";
import "./card.css";
import { IphonesData } from "../../dynamicdata/iphonedata";

const Airpodscard = () => {
  const airPodsData = IphonesData.filter((i) => i.category === "aripods");
  return (
      <div className="cardwidth">
        {airPodsData?.map((item) => (
          <Indexcard
            key={item?.id}
            image={item?.image}
            model={item?.model}
            price={item?.price}
            delprice={item?.delprice}
            itemId={item?.id} />
        ))}
      </div>
  );
};

export default Airpodscard;
