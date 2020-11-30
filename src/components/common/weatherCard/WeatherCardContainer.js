import { connect } from "react-redux";

import WeatherCard from "./WeatherCard";

const mapStateToProps = state => {
  return {
    isFerenheit: state.isFerenheit,
  };
};

export default connect(mapStateToProps)(WeatherCard)