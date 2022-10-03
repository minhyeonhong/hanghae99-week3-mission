import React, { useState } from "react";
import Layout from "../components/layout/Layout";


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
        <Layout todoList={todoList} setTodoList={setTodoList} />
        //?? 이게 레이아웃도 컴포넌트로 만들면 페이지로써의 의미가 있나?
        // <div className="layout">
        //     <Header />
        //     <Form inputText={inputText} getInput={getInput} addTodo={addTodo} />
        //     <List todoList={todoList} changeDone={changeDone} deleteTodo={deleteTodo} />
        // </div>
    );
}

export default TodoList;