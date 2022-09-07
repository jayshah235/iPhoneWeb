import { createContext, useState } from "react";

export const Itemscontext = createContext(null);

const Contextapi = (props) => {
  const [items, setItems] = useState([]);

  return (
    <>
      <Itemscontext.Provider value={{items, setItems}} >{props.children}</Itemscontext.Provider>
    </>
  );
};

export default Contextapi;
