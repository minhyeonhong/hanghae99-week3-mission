import React from "react";
import Todo from "../todo/Todo";
import styled from "styled-components";

//state
import { useSelector } from 'react-redux';

const StListContainerDiv = styled.div`
    padding: 0 24px;
`
const StListWrapperDiv = styled.div`
     display: flex;
    flex-wrap: wrap;
    gap: 12px;
`
const StH2 = styled.h2`
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`

function List() {
    const gTodoList = useSelector(state => state.todoList.todoList);

    return (
        <StListContainerDiv>
            <StH2>Working.. 🔥</StH2>
            <StListWrapperDiv>
                {gTodoList.map((val) => {
                    if (val.done === false) return (<Todo obj={val} key={val.id} />);
                })}
            </StListWrapperDiv>
            <StH2>Done..! 🎉</StH2>
            <StListWrapperDiv>
                {gTodoList.map((val) => {
                    if (val.done) return (<Todo obj={val} key={val.id} />);
                })}
            </StListWrapperDiv>
        </StListContainerDiv>
    )
}

export default List;