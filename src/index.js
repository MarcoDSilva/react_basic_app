import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

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
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increment} text={"Plus"} />
      <Button onClick={decrement} text={"Minus"} />
      <Button onClick={reset} text={"Reset"} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
