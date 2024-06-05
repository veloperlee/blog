import '../App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Login from '../Login/Login.js';

function Main() {

  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/login') }}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='friend'>
        <p>아</p>
      </div>
    </div>
  )
}

export default Main;
