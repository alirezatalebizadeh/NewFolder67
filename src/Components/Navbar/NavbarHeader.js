import React from "react";
import { AiFillHome, AiFillSetting, AiFillDashboard } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarHeader() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className="mt-2">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home">
              Home <AiFillHome />
            </Link>
            <Link to="/courses">
              Courses <FaRegAddressBook />
            </Link>
            <Link to="/about">
              About <FcAbout />
            </Link>
            <Link to="/about/setting">
              Setting <AiFillSetting />
            </Link>
            <Link to="about/dashboard">
              Dashbaord <AiFillDashboard />
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
