import React, { useState } from "react";
import { useEffect } from "react";
import { searchRecipe } from "../info-api/api";
import { Login } from "./Login";
import { NavBar } from "./NavBar";
import { Plates } from "./Plates";
import { Search } from "./Search";

export const Home = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [plates, setPlates] = useState([]);

  const [seeSearch, setSeeSearch] = useState(false);
  const [seeMenu, setSeeMenu] = useState(true);

  const handleLoginClick = () => {
    setLoginModal(true);
  };

  // console.log(searchRecipe())

  return (
    <div className="bg-dark vh-100">
      {loginModal && (
        <Login loginModal={loginModal} setLoginModal={setLoginModal} />
      )}
      <NavBar
        loginModal={loginModal}
        setLoginModal={setLoginModal}
        seeSearch={seeSearch}
        setSeeSearch={setSeeSearch}
        seeMenu={seeMenu}
        setSeeMenu={setSeeMenu}
      />
      {seeMenu && (
        <div>
          <Plates />
        </div>
      )}
      {seeSearch && (
        <div>
          <Search />
        </div>
      )}
    </div>
  );
};
