import React from 'react';
import navLogo from '../assets/Group 2.png'
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import allTaskLogo from "../assets/Group 6.png";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="container mt-4">
        <Container fluid>
          <h2>
            {" "}
            <Link to="/" className="text-decoration-none text-dark">
              {" "}
              <img src={navLogo} alt="na-logo" /> {" "}
            </Link>{" "}


          </h2>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            
                <Link to="/NewTask" className="text-decoration-none text-dark">
                  <h4> New Task </h4>
                </Link>
                <Link to="/AllTask" className="text-decoration-none text-dark p-4">
                  <h4> All Tasks </h4>
                </Link>

                {/* All Task Logo */}
                <Link to="/EditTask" className="text-decoration-none text-dark">
              {" "}
              <img src={allTaskLogo} alt="na-logo" /> {" "}
            </Link>{" "}
             
              <Link className="text-decoration-none text-dark d-none d-lg-block">
              </Link>
    
              <>
              <section className="d-flex gap-5 align-items-center">
                  <Link className="text-decoration-none text-dark d-none d-lg-block">
                  </Link>
                </section>
              </>
          

            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar