import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const rng = () => Math.floor(Math.random() * anecdotes.length);

const Button = ({ handleBtn, text }) => {
  return <button onClick={() => handleBtn()}>{text}</button>;
};

const TopAnedote = ({anecdotes, max}) => (
  <div>
    <h3>Anecdote with most votes</h3>
    <p>{anecdotes[max]}</p>
  </div>
);

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState([0,0,0,0,0,0])

  const newQuote = () => {
    let index = rng()
    setSelected(index)
  }

  const voteQuote = (index) => {
    let newVotes = [...votes]
    newVotes[index] += 1
    setVote(newVotes)
  }

  const getTopAnedocte = () => {
    let max = Math.max.apply(null,votes)
    return votes.indexOf(max)
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>this quote has {votes[selected]} votes</p>
      <Button handleBtn={() => voteQuote(selected)} text={"vote"} />
      <Button handleBtn={newQuote} text="next anedocte" />
      <TopAnedote anecdotes={anecdotes} max={getTopAnedocte()}/>
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
