import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <section style={{ marginLeft: "30px" }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
