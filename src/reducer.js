const initialState = {
  isFavoritesSelected: false,
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'tab/selectFavorites': {
      return {
        ...state,
        isFavoritesSelected: true
      }
    };
    case 'tab/selectHome': {
      return {
        ...state,
        isFavoritesSelected: false
      }
    }
    default:
      return state
  }
}