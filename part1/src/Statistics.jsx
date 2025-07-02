import Header from "./Header";
import StatisticsLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <Header course="Statistics" />
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="average" value={total / 3} />
          <StatisticsLine text="positive" value={(good / total) * 100 + "%"} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
