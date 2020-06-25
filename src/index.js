import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ clickHandle, text }) => {
  return <button onClick={clickHandle}>{text}</button>;
};

const Statistics = ({ text, stat }) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{stat}</td>
    </tr>
  );
};

const Stats = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const positive = ((good / all) * 100).toFixed(2) + '%'
  const average = (good - bad) / all
  
  //conditional rendering
  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h3>Statistics</h3>
      <table>
        <tbody>
          <Statistics text="good" stat={good} />
          <Statistics text="neutral" stat={neutral} />
          <Statistics text="bad" stat={bad} />
          <Statistics text="all" stat={all} />
          <Statistics text="average" stat={average} />
          <Statistics text="positive" stat={positive} />
        </tbody>
      </table>
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
      <h2>give feedback</h2>
      <Button clickHandle={() => setGood(good + 1)} text="good" />
      <Button clickHandle={() => setNeutral(neutral + 1)} text="neutral" />
      <Button clickHandle={() => setBad(bad + 1)} text="bad" />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
