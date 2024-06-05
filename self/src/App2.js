import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import Login from './page/Login/Login.js';
import Friend from './page/Components/Friend.js';

function App2() {
  let [friends, setFriends] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFriends(data.friend))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>NTR</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/friend" className="nav-link">friend</Link>
          </Nav>
        </Container>
      </Navbar>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/friend" element={<FriendList friends={friends} />} />
        </Routes>
      </main>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to NTR</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h4>Login Page</h4>
      <Outlet />
    </div>
  );
}

function FriendList(props) {
  return (
    <div className='friend'>
      <h2>친구목록</h2>
      <ul>
        {props.friends.map(function (friend, i) {
          return (
            <li key={friend.id}>
              {friend.title} ({friend.speed})
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default App2;
