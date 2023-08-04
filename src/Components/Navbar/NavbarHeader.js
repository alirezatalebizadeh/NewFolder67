import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarHeader() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className="mt-2">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
