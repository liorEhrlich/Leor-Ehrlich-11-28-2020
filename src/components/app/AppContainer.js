import { connect } from "react-redux";
import { setIsHomeViewShown } from "../../actions/actionCreators";
import App from "./App";

const mapStateToProps = state => {
  return {
    isHomeViewShown: state.isHomeViewShown
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIsHomeViewShown: isShown => dispatch(setIsHomeViewShown(isShown))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
