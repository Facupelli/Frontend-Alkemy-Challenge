import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { PlateDetail } from "./components/PlateDetail";
import { Search } from "./components/Search";
import { StoreContext } from "./context/context";

function App() {
  const { token, setToken } = useContext(StoreContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <Routes>
      <Route path="" element={token ? <Home /> : <Login />} />
      <Route path="/search" element={token ? <Search /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recipe/:id" element={token ? <PlateDetail /> : <Login />} />
    </Routes>
  );
}

export default App;
