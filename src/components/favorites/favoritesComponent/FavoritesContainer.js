import { connect } from "react-redux";
import pick from "lodash/pick";

import Favorites from "./Favorites";

const mapStateToProps = state => {
  const favoriteCitiesWeather = pick(state.citiesWeather, state.favoriteCities);

  return {
    citiesWeather: favoriteCitiesWeather
  };
};

export default connect(mapStateToProps)(Favorites);
