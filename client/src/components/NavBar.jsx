import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { useState } from "react";

export const NavBar = () => {
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);

  const token = localStorage.getItem("token");

  const navigateHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    setLoginModal(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
  }

  const navigateSearch = () => {
    navigate("/search");
  };

  return (
    <>
      {loginModal && (
        <Login
          loginModal={loginModal}
          setLoginModal={setLoginModal}
          noClose={false}
        />
      )}
      <Navbar bg="dark" variant="dark">
        <Container className="pt-2 pb-2">
          <Navbar.Brand href="#home">HOTEL MENU APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={navigateHome}>Menu</Nav.Link>
            <Nav.Link onClick={navigateSearch}>Search</Nav.Link>
            {token ? (
              <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogin}>Login</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
