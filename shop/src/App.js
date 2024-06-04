import { useState } from 'react';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/deatil') }}>Deatil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path="/" element={<><div className="main-bg"></div>
          <div className='container'>
            <div className='row'>
              {
                shoes.map(function (a, i) {
                  return (
                    <Card shoes={shoes[i]} i={i + 1} key={i}></Card>
                  )
                })
              }
            </div>
          </div> </>} />
        <Route path="/detail" element={<Detail />} />
        <Route path="about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
      </Routes>


      {/* <div className="main-bg"></div>

      <div className='container'>
        <div className='row'>
          {
            shoes.map(function (a, i) {
              return (
                <Card shoes={shoes[i]} i={i + 1} key={i}></Card>
              )
            })
          }
        </div>
      </div> */}
    </div>


  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}


// function List(props) {
//   return (
//     <div className='col-md-4'>
//       <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="88%" />
//       <h4>{props.shoes[i].title}</h4>
//       <p>{props.shoes[i].price}</p>
//     </div>
//   )
// }

function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="88%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
