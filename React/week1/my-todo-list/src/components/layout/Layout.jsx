import React from "react";
import "./Layout.css";
import List from "../list/List";
import Form from "../form/Form";
import Header from "../header/Header";

function Layout({ todoList, setTodoList }) {
    return (
        <div className="layout">
            <Header />
            <Form todoList={todoList} setTodoList={setTodoList} />
            <List todoList={todoList} setTodoList={setTodoList} />
        </div>
    );
}

export default Layout;