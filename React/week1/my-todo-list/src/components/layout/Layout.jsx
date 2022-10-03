import React from "react";
import "./Layout.css";
import List from "../list/List";
import Form from "../form/Form";
import Header from "../header/Header";

function Layout({ inputText, getInput, addTodo, todoList, changeDone, deleteTodo }) {
    return (
        <div className="layout">
            <Header />
            <Form inputText={inputText} getInput={getInput} addTodo={addTodo} />
            <List todoList={todoList} changeDone={changeDone} deleteTodo={deleteTodo} />
        </div>
    );
}

export default Layout;