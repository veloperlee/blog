// /* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

<<<<<<< HEAD
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let[modal, setModal] = useState(false);
  let[title, setTitle] = useState(1);
  let [입력값, 입력값변경] = useState('');

=======
  let post = '강남 운동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,1,2]);

  let[버튼, 버튼변경] = useState('여자 코트 추천');

  let[modal, setModal] = useState(false);
>>>>>>> c8890fe937d21823f553352f704d2314d19ba206

  [1,2,3].map(function(a){
    return '아'
  })
<<<<<<< HEAD
  
=======

>>>>>>> c8890fe937d21823f553352f704d2314d19ba206

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

<<<<<<< HEAD
      

=======
>>>>>>> c8890fe937d21823f553352f704d2314d19ba206
      {/* <button onClick={()=>{
        let sort = [...글제목];
        sort.sort();
        console.log(sort);
<<<<<<< HEAD
        글제목변경(sort);
=======

>>>>>>> c8890fe937d21823f553352f704d2314d19ba206
      }}>가나다순정렬</button>

      <button onClick={()=>{
        let copy = [...글제목];

        copy[0] = '여자코트 추천';
        글제목변경(copy);
<<<<<<< HEAD
      }}>글수정</button>

      <div className="list">
=======
      }}>글수정</button> */}

      {/* <div className="list">
>>>>>>> c8890fe937d21823f553352f704d2314d19ba206
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(!modal)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
<<<<<<< HEAD

=======
      
>>>>>>> c8890fe937d21823f553352f704d2314d19ba206

      {
        글제목.map(function(a, i){
          return (<div className="list" key={i}>
<<<<<<< HEAD
          <h4 onClick={()=>{
             setModal(!modal);
             setTitle(i)}}>
              {글제목[i]}
             <span onClick={(e)=>{
              e.stopPropagation();
              let copy= [...따봉];
              copy[i] = copy[i] + 1;
              따봉변경(copy);
             }}>👍</span> {따봉[i]}</h4>
          <p>2월 17일 발행</p>
          <button onClick={()=>{
            let 삭제본 = [...글제목];
            삭제본.splice([i],1);
            console.log(삭제본);
            글제목변경(삭제본);
          }}>삭제</button>
=======
          <h4 onClick={()=>{ setModal(!modal)}}>{글제목[i]}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉}</h4>
          <p>2월 17일 발행</p>
>>>>>>> c8890fe937d21823f553352f704d2314d19ba206
        </div>)
        })
      }


<<<<<<< HEAD
      <input onChange={(e)=>{
        입력값변경(e.target.value);
        // console.log(입력값);
      }}></input>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);


        // 글제목변경(prevList => [...prevList, 입력값])
        // 글제목변경(글제목.concat(입력값));
      }}>버튼</button>

      {/* <button onClick={()=>{
        setTitle(0)
      }}>글제목0</button>
      <button onClick={()=>{
        setTitle(1)
      }}>글제목1</button>
      <button onClick={()=>{
        setTitle(2)
      }}>글제목2</button> */}


      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} /> : null
=======
      {
        modal == true ? <Modal /> : null
>>>>>>> c8890fe937d21823f553352f704d2314d19ba206
      }


    </div>
  );
}

<<<<<<< HEAD
function Modal(props){
  return(
      <div className='modal' style={{background: props.color}}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          {props.글제목변경(['여자코트 추천','강남 우동 맛집', '파이썬 독학'])}
        }}>글수정</button>
=======
function Modal(){
  return(
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
>>>>>>> c8890fe937d21823f553352f704d2314d19ba206
      </div>
  )
}



export default App;
