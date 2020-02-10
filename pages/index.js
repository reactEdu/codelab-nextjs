import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => {
  const [ list, setList ] = useState([]); 
  const [ task, setTask ] = useState(''); 

  const data = {
    id: new Date().getTime().toString(),
    content: '[' + Math.floor(Math.random()*3+1) + '] ' + task
  }

  const handleChangeTask = (e) => {
    setTask(e.target.value);
  }

  const addItem = () => {
    let todoList = localStorage.getItem('todo-list');
    if (todoList) {
      todoList = JSON.parse(todoList);
    } else {
      todoList = [];
    }
    todoList.push(data);

    localStorage.setItem('todo-list', JSON.stringify( todoList ));

    load();
    setTask('');
  }

  const load = () => {
    let list = localStorage.getItem('todo-list');
    if( list ) list = JSON.parse(list)
    else list = [];
    setList(list);
  }

  // localStorage처럼 클라이언트 사이드 자바스크립트는 useEffect안에서 실행
  useEffect(() => {
    load();
  }, []); // componentDidMount


  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      
      <div className="container">
        <div className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" onChange={handleChangeTask} value={task}/>
          </div>
          <div className="form-group">
            <button className="btn btn-white" onClick={() => addItem()}>추가</button>
          </div>
        </div>
        <ul>
          {
            list.map(item => (
              <li key={item.id}>{item.content}</li>
            )
          )}
        </ul>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>

  );
}

export default Home
