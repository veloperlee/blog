import { useState } from 'react';
import './App.css';
import {Button, Container, Nav, Navbar, Row, Col  } from 'react-bootstrap';
import data from './data.js'

function App() {

  let [shoes] = useState()

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="88%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className='col-md-4'>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="88%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className='col-md-4'>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="88%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
