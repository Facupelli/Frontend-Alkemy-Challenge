import React, { useState } from "react";
import { getRecipeById, searchRecipe } from "../info-api/api";
import { Login } from "./Login";
import { NavBar } from "./NavBar";
import { Plates } from "./Plates";
import { Search } from "./Search";

export const Home = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [menuPlates, setMenuPlates] = useState([]);

  const [seeSearch, setSeeSearch] = useState(false);
  const [seeMenu, setSeeMenu] = useState(true);

  // console.log(searchRecipe())
  // console.log(getRecipeById(648176))

  return (
    <div className="bg-dark ">
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
        <div className="mb-4">
          <Search />
        </div>
      )}
    </div>
  );
};
