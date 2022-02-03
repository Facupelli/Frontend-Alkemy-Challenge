import React, { useState } from "react";
import { useContext } from "react";
import { getRecipeById, searchRecipe } from "../info-api/api";
import { Login } from "./Login";
import { NavBar } from "./NavBar";
import { Plates } from "./Plates";
import { Search } from "./Search";
import {StoreContext} from '../context/context'

export const Home = () => {
  const [loginModal, setLoginModal] = useState(false);

  const {menuPlates} = useContext(StoreContext);
  console.log('HOME',menuPlates)
  


  const [seeSearch, setSeeSearch] = useState(false);
  const [seeMenu, setSeeMenu] = useState(true);

  // console.log(searchRecipe())
  // console.log(getRecipeById(648176))

  return (
    <div className="bg-dark min-vh-100">
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
