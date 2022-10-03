import React, { useState } from "react";
import Layout from "../components/layout/Layout";


function TodoList() {
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
        setInputText({});
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
        <Layout inputText={inputText} getInput={getInput} addTodo={addTodo} todoList={todoList} changeDone={changeDone} deleteTodo={deleteTodo} />
        //?? 이게 레이아웃도 컴포넌트로 만들면 페이지로써의 의미가 있나?
        // <div className="layout">
        //     <Header />
        //     <Form inputText={inputText} getInput={getInput} addTodo={addTodo} />
        //     <List todoList={todoList} changeDone={changeDone} deleteTodo={deleteTodo} />
        // </div>
    );
}

export default TodoList;