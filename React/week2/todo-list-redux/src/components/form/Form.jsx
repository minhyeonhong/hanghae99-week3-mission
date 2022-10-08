import React, { useState } from "react";
import styled from "styled-components";

//스토어의 상태값과 action을 취하기 위해
import { useSelector, useDispatch } from 'react-redux';
//리듀서의 액션 함수 쓰기위해
import { addTodo } from '../../redux/modules/todoList';

const StAddFormDiv = styled.div`
    background-color: rgb(238, 238, 238);
    border-radius: 12px;
    margin: 0px auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
`
const StInputGroupDiv = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
`
const StFormLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`
const StAddInput = styled.input`
    border: none;
    border-radius: 12px;
    height: 40px;
    padding: 0 12px;
    width: 240px;
`
const StAddButton = styled.button`
    background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`

function Form() {

    const [inputText, setInputText] = useState({ title: "", content: "" });
    //store의 상태값 변수로 선언
    const gTodoList = useSelector(state => state.todoList.todoList);
    //store의 상태를 변경할 dispatch선언
    const dispatch = useDispatch();

    //인풋 바뀔때 마다 값넣기
    const getInput = (e) => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        });
    };

    //id최대값
    const getMaxId = () => {
        let stateIdArr = gTodoList.map(element => {
            return Number(element.id)
        });
        return Math.max(...stateIdArr);
    }

    return (
        <StAddFormDiv>
            <StInputGroupDiv>
                <StFormLabel>제목</StFormLabel>
                <StAddInput
                    type="text"
                    name="title"
                    onChange={getInput}
                    value={inputText.title || ""}
                />
                <StFormLabel>내용</StFormLabel>
                <StAddInput
                    type="text"
                    name="content"
                    onChange={getInput}
                    value={inputText.content || ""}
                />
            </StInputGroupDiv>
            <StAddButton onClick={() => {
                if (inputText.title === "" || inputText.content === "" || inputText.title === undefined || inputText.content === undefined) {
                    alert("빈칸좀..")
                } else {
                    let obj = {
                        id: Number(getMaxId()) + 1,
                        title: inputText.title,
                        content: inputText.content
                    }
                    dispatch(addTodo(obj));
                    setInputText({});
                }
            }}>
                추가하기
            </StAddButton>
        </StAddFormDiv>
    );
}

export default Form;