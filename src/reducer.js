import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actionTypes"

const initialState = {
  favoriteCities : [],
  selectedCityName : 'Tel Aviv',
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE: {
      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload]
      }
    };
    case REMOVE_FAVORITE: {
      return {
        ...state,
        favoriteCities: state.favoriteCities.filter(cityName => cityName !== action.payload)
      }
    };
    default:
      return state
  }
}