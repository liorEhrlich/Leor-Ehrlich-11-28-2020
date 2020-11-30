import { connect } from "react-redux";

import ToggleFavorite from "./ToggleFavorite";
import { addFavorite, removeFavorite } from "../../../actions/actionCreators";

const mapStateToProps = state => {
  return {
    cityName: state.selectedCityName,
    isFavorite: state.favoriteCities.indexOf(state.selectedCityName) > -1
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: cityName => dispatch(addFavorite(cityName)),
    removeFavorite: cityName => dispatch(removeFavorite(cityName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFavorite);
