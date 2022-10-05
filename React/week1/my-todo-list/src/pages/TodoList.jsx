import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
import Form from "../components/form/Form";
import Header from "../components/header/Header";


function TodoList() {
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

    return (
        <Layout>
            <Header />
            <Form todoList={todoList} setTodoList={setTodoList} />
            <List todoList={todoList} setTodoList={setTodoList} />
        </Layout>
    );
}

export default TodoList;