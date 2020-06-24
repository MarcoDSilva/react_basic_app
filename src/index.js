import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ clickHandle, text }) => {
  return <button onClick={clickHandle}>{text}</button>;
};

const Stats = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h3>Statistics</h3>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>average: </p>
    </div>
  );
};

const App = () => {
  //states
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Button clickHandle={() => setGood(good + 1)} text="good" />
      <Button clickHandle={() => setNeutral(neutral + 1)} text="neutral" />
      <Button clickHandle={() => setBad(bad + 1)} text="bad" />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
