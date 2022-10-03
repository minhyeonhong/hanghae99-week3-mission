import React from "react";
import "./Form.css";

function Form({ inputText, getInput, addTodo }) {
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