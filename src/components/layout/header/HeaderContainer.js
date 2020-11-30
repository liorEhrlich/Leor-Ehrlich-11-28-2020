import { connect } from "react-redux";

import Header from "./Header";
import { setIsFerenheit } from "../../../actions/actionCreators";

const mapStateToProps = state => {
  return {
    isFerenheit: state.isFerenheit,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIsFerenheit: isFerenheit => dispatch(setIsFerenheit(isFerenheit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
