import { connect } from 'react-redux'
import pick from "lodash/pick"

import Favorites from "./Favorites"

const mapStateToProps = (state) => {
  return {
    favoriteCitiesWeather: pick(state.citiesForecast, state.favoriteCitiesIds)
  }
}

export default connect(mapStateToProps)(Favorites)