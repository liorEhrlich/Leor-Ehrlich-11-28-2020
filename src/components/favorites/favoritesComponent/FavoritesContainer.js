import { connect } from 'react-redux'

import Favorites from "./Favorites"

const mapStateToProps = (state) => {
  return {
    favoriteCities: state.favoriteCities
  }
}

export default connect(mapStateToProps)(Favorites)