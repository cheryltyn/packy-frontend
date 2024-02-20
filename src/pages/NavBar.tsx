import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavigationBar: React.FC = () => {
  return (
    <Navbar bg="white" expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand as={Link} to="/">Packy</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/create">
            <Button variant="primary">Create</Button>
          </Nav.Link>
          <Nav.Link href="#settings">
            <i className="bi bi-gear large-icon"></i>
          </Nav.Link>
          <Nav.Link as={Link} to="/user">
            <i className="bi bi-person-circle large-icon"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
