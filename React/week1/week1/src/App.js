import React, { useState, useEffect } from 'react';

function App() {

  // const [state, setState] = useState(0);

  // function test(a) {
  //   setState(state + a);
  //   console.log(state);
  // }


  return (
    <div style={{
      height: '100vh',
      display: ' flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* {state}
    <button onClick={()=>{test(1)}}>test+1</button>
    <button onClick={()=>{test(-1)}}>test-1</button> */}
      <A />
    </div>
    
  );
}

function A() {
  const [name, setName] = useState("르탄이");

  function setname() {
    setName("진도사우르스");
  }
  return (
    <>
      <B name={name} />
      <button onClick={setname}>버튼</button>
    </>

  )
}

function B(props) {
  return (
    <div>
      {props.name}
    </div>
  )
}

export default App;
