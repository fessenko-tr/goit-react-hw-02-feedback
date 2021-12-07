import PropTypes from "prop-types";

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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
