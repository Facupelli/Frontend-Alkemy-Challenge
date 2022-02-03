import React, { useState, createContext } from "react";


export const StoreContext = createContext(null)

export default ({ children }) => {
  
    const [menuPlates, setMenuPlates] = useState([])
    const [vegCount, setVegCount] = useState(0)

  
    const store = {
      menuPlates,
      setMenuPlates,
      vegCount,
      setVegCount,
    }
  
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  }