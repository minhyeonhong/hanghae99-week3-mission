import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'
//action을 취하기 위해
import { useDispatch } from 'react-redux';
//리듀서의 액션 함수 쓰기위해
import { deleteTodo, changeDone } from '../../redux/modules/todoList';

const StTodoContainerDiv = styled.div`
    border: 4px solid teal;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
`
const StButtonWrap = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`
const StTodoButton = styled.button`
    border: 1px solid ${(props) => props.buttonColor};
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
`
const StDetail = styled(Link)`
    text-decoration: none;
`

function Todo({ obj }) {
    const dispatch = useDispatch();
    return (
        <StTodoContainerDiv>
            <div>
                <StDetail to={'/detail/' + obj.id}>상세보기</StDetail>
                <h2>{obj.title}</h2>
                <div>{obj.content}</div>
            </div>
            <StButtonWrap>
                <StTodoButton
                    buttonColor="red"
                    onClick={() => {
                        dispatch(deleteTodo(obj.id));
                    }}
                >
                    삭제하기
                </StTodoButton>
                <StTodoButton
                    buttonColor="green"
                    onClick={() => {
                        dispatch(changeDone(obj.id));
                    }}
                >
                    {obj.done ? "취소" : "완료"}
                </StTodoButton>
            </StButtonWrap>
        </StTodoContainerDiv >
    );
}

export default Todo;