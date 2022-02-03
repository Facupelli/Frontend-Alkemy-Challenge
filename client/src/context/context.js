import React, { useState, createContext } from "react";


export const StoreContext = createContext(null)

export default ({ children }) => {
  
    const [menuPlates, setMenuPlates] = useState([])
  
    const store = {
      menuPlates,
      setMenuPlates,
    }
  
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  }