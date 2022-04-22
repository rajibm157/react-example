import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

function Spinner(props) {
  return (
    <>
      {props.visible ? (
        <div className="loader">
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={250}
            width={250}
            visible={props.visible}
          />
          <h1 className="loader-title">Loading...</h1>
        </div>
      ) : null}
    </>
  );
}

Spinner.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Spinner;
