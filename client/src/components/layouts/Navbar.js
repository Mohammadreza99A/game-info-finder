import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar as NavBar, Nav, Container, NavItem } from 'react-bootstrap';

function Navbar() {
  return (
    <NavBar expand="lg" bg="danger" variant="dark" sticky="top">
      <Container>
        <NavBar.Brand className="text-bold" href="/">
          Game Info Finder
        </NavBar.Brand>
        <NavBar.Toggle
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <NavBar.Collapse id="navbarColor02">
          <Nav className="mr-auto text-center">
            <NavItem href="/">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </NavItem>
            <NavItem href="/about">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </NavItem>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
}

export default Navbar;
