import React, { useState, createContext } from "react";

export const StoreContext = createContext(null);

export default ({ children }) => {
  const [menuPlates, setMenuPlates] = useState([]);
  const [vegCount, setVegCount] = useState({
    veg: 0,
    meat: 0,
  });
  const [token, setToken] = useState(null);

  const store = {
    menuPlates,
    setMenuPlates,
    vegCount,
    setVegCount,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
