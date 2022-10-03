import React from "react";
import Todo from "../todo/Todo";
import "./List.css";

function List({ todoList, changeDone, deleteTodo }) {
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