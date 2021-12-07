function Stats({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {`${positiveFeedback}%`}</p>
    </div>
  );
}

export default Stats;
