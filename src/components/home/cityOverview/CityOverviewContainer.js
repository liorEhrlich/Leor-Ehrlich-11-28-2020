import { connect } from 'react-redux'
import { addCityWeather } from '../../../actions/actionCreators'

import CityOverview from "./CityOverview"

const mapStateToProps = (state) => {
  return {
    cityName: state.selectedCityName,
    cityWeather: state.citiesWeather[state.selectedCityName]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCityWeather: (cityWeather) => dispatch(addCityWeather(cityWeather)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityOverview)