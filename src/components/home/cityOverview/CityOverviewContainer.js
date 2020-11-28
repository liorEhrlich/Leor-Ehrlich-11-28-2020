import { connect } from 'react-redux'
import CityOverview from "./CityOverview"

const mapStateToProps = (state) => {
  return {
    city: state.selectedCity
  }
}

export default connect(mapStateToProps)(CityOverview)