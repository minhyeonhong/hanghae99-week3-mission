import React from "react";
import Todo from "../todo/Todo";
import "./List.css";

function List({ todoList, setTodoList }) {
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
        <div className="list-container">
            <h2 className="list-title">Working.. 🔥</h2>
            <div className="list-wrapper">
                {todoList.map((val) => {
                    if (!val.done) return (<Todo obj={val} changeDone={changeDone} deleteTodo={deleteTodo} key={val.id} />);
                })}
            </div>
            <h2 className="list-title">Done..! 🎉</h2>
            <div className="list-wrapper">
                {todoList.map((val) => {
                    if (val.done) return (<Todo obj={val} changeDone={changeDone} deleteTodo={deleteTodo} key={val.id} />);
                })}
            </div>
        </div>
    )
}

export default List;