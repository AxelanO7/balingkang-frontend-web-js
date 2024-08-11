import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo_bw from "../assets/logo_bw.png";

const NavbarComponent = () => {
  return (
    <Navbar
      variant="dark"
      className="fixed-top"
      style={{ backgroundColor: "#A20404" }}
    >
      <Container>
        {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
        <img src={logo_bw} alt="logo" width={70} />
        <Nav>
          <Nav.Link
            href="https://lafainaikat.com/tour"
            className="me-2 fw-bolder"
          >
            Virtual Tour
          </Nav.Link>
          <Nav.Link href="/#history" className="me-2 fw-bolder">
            Sejarah
          </Nav.Link>
          <Nav.Link href="/structure" className="mx-2 fw-bolder">
            Struktur
          </Nav.Link>
          <Nav.Link href="/documentation" className="mx-2 fw-bolder">
            Dokumentasi
          </Nav.Link>
          <Nav.Link href="login" className="ms-2 fw-bolder">
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
