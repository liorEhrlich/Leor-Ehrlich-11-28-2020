import { connect } from "react-redux";
import pick from "lodash/pick";

import Favorites from "./Favorites";
import {
  updateSelectedCity,
  setIsHomeViewShown
} from "../../../actions/actionCreators";

const mapStateToProps = state => {
  const favoriteCitiesWeather = pick(state.citiesWeather, state.favoriteCities);

  return {
    citiesWeather: favoriteCitiesWeather
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCity: city => dispatch(updateSelectedCity(city)),
    setIsHomeViewShown: isShown => dispatch(setIsHomeViewShown(isShown))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
