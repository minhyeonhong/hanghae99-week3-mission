import './App.css';
import React, { useState } from 'react';
//스토어의 상태값과 action을 취하기 위해
import { useSelector, useDispatch } from 'react-redux';
//리듀서의 액션 함수 쓰기위해
import { addTodo } from './redux/modules/todoList';
import Router from "./shared/Router";


function App() {
  //사용자로 부터 받을 인풋값 
  const [todo, setTodo] = useState("");
  //const [todoList, setTodoList] = useState([{}]);
  //store의 상태값 변수로 선언
  const globalTodoList = useSelector(state => state.todoList);
  //store의 상태를 변경할 dispatch선언
  const dispatch = useDispatch();

  const getInputValue = (e) => {
    setTodo(e.target.value);
  }

  // const addTodo = () => {
  //   let obj = {
  //     id: todoList.length,
  //     content: todo
  //   }
  //   if (todo !== undefined && todo !== "") {
  //     setTodoList([...todoList, obj]);
  //   }
  //   setTodo("");
  // }

  //return <Router />
  return (
    <div className="App">
      <input type="text" onChange={getInputValue} value={todo || ""} />
      <button onClick={() => {
        let obj = {
          id: globalTodoList.length,
          todo: todo
        }
        dispatch(addTodo(obj));
        setTodo("");
      }}
      >추가하기</button>
      <h1>Todo List</h1>
      {//스토어의 상태값으로 todoList돌리기
        globalTodoList.map((val) => {
          if (val.content !== undefined && val.content !== "")
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
