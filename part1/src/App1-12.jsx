import { useEffect, useState } from "react";
import Header from "./Header";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [select, setSelect] = useState(0);
  const [votes, setVotes] = useState({});
  const [topVotes, setTopVotes] = useState(0);
  const [topAcnedotes, setTopAcnedotes] = useState([]);

  const handleSelect = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelect(randomNumber);
  };

  const handleVotes = () => {
    const newVote = { ...votes };
    newVote[select] = newVote[select] ? newVote[select] + 1 : 1;
    setVotes(newVote);

    const mayor = newVote[select] > topVotes ? newVote[select] : topVotes;
    setTopVotes(mayor);
  };

  useEffect(() => {
    const newTop = Object.entries(votes)
      .filter(([, valor]) => valor === topVotes)
      .map(([clave]) => anecdotes[clave]);
    setTopAcnedotes(newTop);
  }, [topVotes, votes]);

  const voteAnecdote = votes[select] ? votes[select] : 0;
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[select]} </p>
      <p>has {voteAnecdote} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleSelect}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{topAcnedotes.join(" ")}</p>
      <p>has {topVotes} votes</p>
    </div>
  );
};

export default App;
