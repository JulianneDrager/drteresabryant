import React from "react";
import "../style.css"
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
// import { NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import RegisterForm from "../../images/RegForm.jpg"

import NavStyle from "./Nav.module.css";

const Navigation = () => {
  const navBar = NavStyle.navBar;

  return (
    <>
      <Navbar className={navBar} expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/tmp/communityoflove2022/#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
