import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.
import { addNumber, minusOne, plusOne } from "./redux/modules/counter";
import styled from "styled-components";

const App = () => {

  const globalNumber = useSelector((state) => state.counter.number); //state선언
  const dispatch = useDispatch(); // dispatch 생성

  const [number, setNumber] = useState(0);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNumber(Number(value));
  }

  const onCLickAddNumberHandler = () => {
    dispatch(addNumber(number));
  }

  const Stdiv = styled.div`
    text-align : center;    
    background-color : ${(props) => props.backgroundColor};
  `;

  return (
    <>
      <Stdiv backgroundColor="orange">
        {globalNumber}
        <input type="number" onChange={onChangeHandler} />
        <button
          // 이벤트 핸들러 추가
          onClick={onCLickAddNumberHandler}
        >
          addNumber
        </button>
        <button
          // 이벤트 핸들러 추가
          onClick={() => {
            // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
            dispatch(plusOne());
          }}
        >
          + 1
        </button>
        <button
          // 이벤트 핸들러 추가
          onClick={() => {
            // 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
            dispatch(minusOne());
          }}
        >
          - 1
        </button>
      </Stdiv>
    </>
  )
}

export default App;