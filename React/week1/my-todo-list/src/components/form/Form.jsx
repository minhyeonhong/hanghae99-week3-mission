import React, { useState } from "react";
import "./Form.css";

function Form({ todoList, setTodoList }) {

    const [inputText, setInputText] = useState({ title: "", content: "" });

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

    return (
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
    );
}

export default Form;