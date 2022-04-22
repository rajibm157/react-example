import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReduxToastr from "react-redux-toastr";
import * as AuthActions from "./actions/authActions";
import { Spinner } from "./components";
import Routes from "./routes";

function App(props) {
  useEffect(() => {
    setTimeout(() => {
      props.actions.checkLogin();
    }, 500);
  }, [props.actions]);

  return (
    <>
      {props.logInChecked && <Routes />}
      <Spinner visible={props.isLoading} />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={true}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr} // This is the default
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        progressBar
        closeOnToastrClick
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    logInChecked: state.auth.logInChecked,
    isLoading: state.loading.isLoading,
  };
};

const ActionCreators = Object.assign({}, AuthActions);

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
