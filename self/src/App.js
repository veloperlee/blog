import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import Login from './page/Login/Login.js';
import Friend from './page/Components/Friend.js';

function App() {
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
            <Nav.Link onClick={() => { navigate('/login') }}>Login</Nav.Link>
            <Link to="/friend" className="nav-link">friend</Link>
          </Nav>
        </Container>
      </Navbar>

      <main>
        {/* <FriendList friends={friends} /> */}
        <div className='chat'>

        </div>
      </main>
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route path="join" element={<div>회원가입임</div>} />
          <Route path="id" element={<div>아이디찾기임</div>} />
          <Route path="pw" element={<div>비밀번호찾기임</div>} />
        </Route>
        {/* <Route path="/friend" component={<Friend />} /> */}
        {/* Friends.js 내용 props로 연결하기 위해 friends={friends} 선언 */}
        <Route path="/friend" element={<Friend friends={friends} />} />
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
  );
}

// friend Components
// function FriendList(props) {
//   return (
//     <div className='friend'>
//       <h2>친구목록</h2>
//       <ul>
//         {props.friends.map(function (friend, i) {
//           return (
//             <li key={friend.id}>
//               {friend.title} ({friend.speed})
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   )
// }

export default App;
