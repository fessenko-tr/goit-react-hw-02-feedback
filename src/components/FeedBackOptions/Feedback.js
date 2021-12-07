function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttonsSet = options.map((e) => (
    <button
      onClick={() => {
        onLeaveFeedback(e.toLowerCase());
      }}
      key={e}
    >
      {e}
    </button>
  ));

  return <div>{buttonsSet}</div>;
}

export default FeedbackOptions;
