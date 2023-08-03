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
            <Nav.Link href="/home">
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link href="/courses">
              <Link to="/courses">Courses</Link>
            </Nav.Link>
            <Nav.Link href="/about">
              <Link to="/about">Home</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
