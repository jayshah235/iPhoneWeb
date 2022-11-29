// import { useEffect } from "react";
import { createContext, useState } from "react";

export const Itemscontext = createContext(null);

const Contextapi = (props) => {
  // const localtorageData = JSON.parse(localStorage.getItem("cart"));
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(items));
  // }, [items]);

  return (
    <Itemscontext.Provider value={{ items, setItems }}>
      {props.children}
    </Itemscontext.Provider>
  );
};

export default Contextapi;
