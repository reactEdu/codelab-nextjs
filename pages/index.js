import React, { useState } from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => {
  const [ count, setCount ] = useState(0); 
  const addItem = () => {
    let todoList = localStorage.getItem('todo-list');
    if (todoList) {
      todoList = JSON.parse(todoList);
    } else {
      todoList = [];
    }
    todoList.push({
      id: new Date().getTime().toString(),
      content: '할 일 목록 ' + Math.floor(Math.random()*3+1)
    });

    localStorage.setItem('todo-list', JSON.stringify( todoList ));
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <h1>Hello nextJS</h1>
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
