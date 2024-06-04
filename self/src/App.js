import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
// import Login from './page/Login/Login.js'

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>NTR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/login') }}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/login" element={<Login />}>
          <Route path="join" element={<div>회원가입임</div>} />
          <Route path="id" element={<div>아이디찾기임</div>} />
          <Route path="pw" element={<div>비밀번호찾기임</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h4>로그인페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
