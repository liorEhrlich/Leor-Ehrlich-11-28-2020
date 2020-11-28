import { connect } from "react-redux";

import Header from "./Header";

const mapStateToProps = state => {
  return {
    isFavoritesSelected: state.isFavoritesSelected
  }
}

export default connect(mapStateToProps)(Header)