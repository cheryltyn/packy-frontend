import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { UserContext } from '../App'; 

const NavigationBar: React.FC = ({ onLogOut }) => {

  const user = useContext(UserContext);

  

  return (
    <Navbar bg="white" expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand as={Link} to="/">Packy</Navbar.Brand>
        <Nav className="align-items-center">
          {user && (
            <>
              <Nav.Link as={Link} to="/create">
                <Button variant="primary">Create</Button>
              </Nav.Link>
              <Nav.Link href="#settings">
                <i className="bi bi-gear large-icon"></i>
              </Nav.Link>
              <Nav.Link as={Link} to="/user">
                <i className="bi bi-person-circle large-icon"></i>
              </Nav.Link>
              <span className="fs-6 my-auto"> {user.name} </span>
              <Nav.Link as={Link} to="">
                <Button variant="primary" onClick={onLogOut}>Logout</Button>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
