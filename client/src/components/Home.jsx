import React, { useState } from "react";
import { Login } from "./Login";
import { NavBar } from "./NavBar";
import { Plates } from "./Plates";
import { Search } from "./Search";
import { MenuInfo } from "./MenuInfo";
import { useEffect } from "react";

export const Home = () => {
  const [loginModal, setLoginModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoginModal(true);
    }
  }, []);

  return (
    <div className="bg-dark min-vh-100 m-0 p-0">
      {loginModal && (
        <Login
          loginModal={loginModal}
          setLoginModal={setLoginModal}
          noClose={true}
        />
      )}
      <NavBar loginModal={loginModal} setLoginModal={setLoginModal} />

      <div className="m-0 p-0">
        <MenuInfo />
        <div className="mx-5">
          <Plates />
        </div>
      </div>
    </div>
  );
};
