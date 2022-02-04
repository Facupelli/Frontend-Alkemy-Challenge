import React, { useState } from "react";
import { useContext } from "react";
import { getRecipeById, searchRecipe } from "../info-api/api";
import { Login } from "./Login";
import { NavBar } from "./NavBar";
import { Plates } from "./Plates";
import { Search } from "./Search";
import { StoreContext } from "../context/context";
import { MenuInfo } from "./MenuInfo";

export const Home = () => {
  const [loginModal, setLoginModal] = useState(false);

  const { menuPlates } = useContext(StoreContext);
  console.log("HOME", menuPlates);

  const [seeSearch, setSeeSearch] = useState(false);
  const [seeMenu, setSeeMenu] = useState(true);

  // console.log(searchRecipe())
  // console.log(getRecipeById(648176))

  return (
    <div className="bg-dark min-vh-100 m-0 p-0">
      {loginModal && (
        <Login loginModal={loginModal} setLoginModal={setLoginModal} />
      )}
      <NavBar loginModal={loginModal} setLoginModal={setLoginModal} />
      {seeMenu && (
        <div className="m-0 p-0">
          <MenuInfo />
          <div className="mx-5">
            <Plates />
          </div>
        </div>
      )}
      {seeSearch && (
        <div className="">
          <Search />
        </div>
      )}
    </div>
  );
};
