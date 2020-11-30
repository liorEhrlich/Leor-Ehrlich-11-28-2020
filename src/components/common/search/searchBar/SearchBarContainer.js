import { connect } from "react-redux"

import { updateSelectedCity } from "../../../../actions/actionCreators"
import SearchBar from "./SearchBar"

const mapDispatchToProps = (dispatch) => {
  return {
    updateCity: (city) => dispatch(updateSelectedCity(city)),
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)