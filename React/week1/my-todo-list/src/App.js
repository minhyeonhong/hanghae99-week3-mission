import "./App.css";
import React, { useState, useEffect } from "react";
// import Form from "./components/form/Form.jsx";
// import Header from "./components/header/Header.jsx";
// import Layout from "./components/layout/Layout.jsx";
// import List from "./components/list/List.jsx";
// import Todo from "./components/todo/Todo.jsx";

function App() {
  const [inputText, setInputText] = useState({ title: "", content: "" });
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      title: `리액트 공부하기`,
      content: `리액트 기초를 공부해봅시다.`,
      done: false,
    },
    {
      id: 1,
      title: `리액트 공부하기`,
      content: `리액트 기초를 공부해봅시다.`,
      done: true,
    },
  ]);

  //인풋 바뀔때 마다 값넣기
  const getInput = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  //추가 했을때 리스트에 추가
  const addTodo = () => {
    let obj = {
      id: todoList.length,
      title: inputText.title,
      content: inputText.content,
      done: false,
    };
    if (
      inputText.title !== "" &&
      inputText.content !== "" &&
      inputText.title !== undefined &&
      inputText.content !== undefined
    ) {
      setTodoList([...todoList, obj]);
    }
  };

  //done변경
  const changeDone = (id, done) => {
    todoList.map((val, i, arr) => {
      if (val.id === id) {
        done ? arr[i].done = false : arr[i].done = true
      }
    })
    setTodoList([...todoList]);
  }

  //리스트 삭제
  const deleteTodo = (id) => {
    todoList.map((val, i, arr) => {
      if (val.id === id) {
        arr.splice(i, 1);
      }
    })
    setTodoList([...todoList]);
  }

  return (
    <div className="layout">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="add-form">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            type="text"
            name="title"
            className="add-input input-body"
            onChange={getInput}
            value={inputText.title || ""}
          />
          <label className="form-label">내용</label>
          <input
            type="text"
            name="content"
            className="add-input"
            onChange={getInput}
            value={inputText.content || ""}
          />
        </div>
        <button className="add-button" onClick={addTodo}>
          추가하기
        </button>
      </div>
      <div className="list-container">
        <h2 className="list-title">Working.. 🔥</h2>
        <div className="list-wrapper">
          {todoList.map((val, i) => {
            if (!val.done) return (<Todo obj={val} changeDone={changeDone} deleteTodo={deleteTodo} key={val.id} />);
          })}
        </div>
        <h2 className="list-title">Done..! 🎉</h2>
        <div className="list-wrapper">
          {todoList.map((val, i) => {
            if (val.done) return (<Todo obj={val} changeDone={changeDone} deleteTodo={deleteTodo} key={val.id} />);
          })}
        </div>
      </div>
    </div>
  );
}

function Todo({ obj, changeDone, deleteTodo }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{obj.title}</h2>
        <div>{obj.content}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => {
            deleteTodo(obj.id);
          }}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => {
            changeDone(obj.id, obj.done);
          }}
        >
          {obj.done ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default App;
