import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  //func adds state to the component and renders it with value of 0
  //counter is initialized with the value of state (0)
  //set counter is assigned a func that will be used to modify the state
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <div> {counter} </div>
      <button onClick={increment}> Plus </button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
