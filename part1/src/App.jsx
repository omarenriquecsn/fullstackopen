import { useState } from "react";
import Header from "./Header";
import Statistics from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  return (
    <div>
      <Header course="give Feedback" />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Header course="statistics" />

      {total === 0 ? (
        <p>No Feedback given</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      )}
    </div>
  );
};

export default App;
