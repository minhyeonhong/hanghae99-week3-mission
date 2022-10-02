import React, { useState, useEffect } from 'react';

function App() {

  const [state, setState] = useState(0);

  function test (a) {
    setState(state+a);
    console.log(state);
  }

  return (
    <div style={{
      height: '100vh',
      display: ' flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {state}
    <button onClick={()=>{test(1)}}>test+1</button>
    <button onClick={()=>{test(-1)}}>test-1</button>
  </div>
  );
}

export default App;
