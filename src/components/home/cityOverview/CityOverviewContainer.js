import { connect } from 'react-redux'

import CityOverview from "./CityOverview"

const mapStateToProps = (state) => {
  return {
    cityName: state.selectedCityName,
  }
}

export default connect(mapStateToProps)(CityOverview)