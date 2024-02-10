import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';


const NavigationBar: React.FC = () => {
  return (
    <Navbar bg="white" expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#home">Packy</Navbar.Brand>
        <Nav>
          <Nav.Link href="#create">
            <Button variant="primary">Create</Button>
          </Nav.Link>
          <Nav.Link href="#settings">
            <i className="bi bi-gear large-icon"></i>
          </Nav.Link>
          <Nav.Link href="#profile">
            <i className="bi bi-person-circle large-icon"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
