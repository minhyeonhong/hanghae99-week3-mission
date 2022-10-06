import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([{}]);

  const getInputValue = (e) => {
    setTodo(e.target.value);
  }

  const addTodo = () => {
    let obj = {
      id: todoList.length,
      content: todo
    }
    if (todo !== undefined && todo !== "") {
      setTodoList([...todoList, obj]);
    }
    setTodo("");
  }
  return (
    <div className="App">
      <input type="text" onChange={getInputValue} value={todo || ""} />
      <button onClick={addTodo}>추가하기</button>
      <h1>Todo List</h1>
      {
        todoList.map((val) => {
          if (val.content !== undefined)
            return (
              <div key={val.id} className="todo">
                {val.content}
              </div>
            )
        })
      }


    </div>
  );
}

export default App;
