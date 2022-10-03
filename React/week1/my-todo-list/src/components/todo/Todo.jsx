import React from "react";
import "./Todo.css";

function Todo({ obj, changeDone, deleteTodo }) {
    return (
        <div className="todo-container">
            <div>
                <h2 className="todo-title">{obj.title}</h2>
                <div>{obj.content}</div>
            </div>
            <div className="button-set">
                <button
                    className="todo-delete-button button"
                    onClick={() => {
                        deleteTodo(obj.id);
                    }}
                >
                    삭제하기
                </button>
                <button
                    className="todo-complete-button button"
                    onClick={() => {
                        changeDone(obj.id, obj.done);
                    }}
                >
                    {obj.done ? "취소" : "완료"}
                </button>
            </div>
        </div>
    );
}

export default Todo;