import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = ({ loginModal, setLoginModal }) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    setLoginModal(true);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">HOTEL MENU APP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={navigateHome}>Menu</Nav.Link>
          <Nav.Link onClick={handleLogin}>Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
