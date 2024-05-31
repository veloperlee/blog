// /* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(1);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModal(!modal);
                setTitle(i)
              }}>
                {글제목[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}>👍</span> {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let 삭제본 = [...글제목];
                삭제본.splice(i, 1);
                글제목변경(삭제본);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value);
      }}></input>
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
      }}>버튼</button>

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} /> : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        props.글제목변경(['여자코트 추천', '강남 우동 맛집', '파이썬 독학'])
      }}>글수정</button>
    </div>
  )
}

export default App;
