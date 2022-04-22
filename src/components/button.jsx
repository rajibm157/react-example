import PropTypes from "prop-types";

function Button(props) {
  return (
    <div>
      <button>{props.title}</button>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
