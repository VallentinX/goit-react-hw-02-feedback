import React from "react";

const Statistics = ({ good, neutral, bad, total, positives }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Percentage: {positives}%</p>
    </div>
  );
};

export default Statistics;
