import { ADD_CITY_WEATHER, ADD_FAVORITE, REMOVE_FAVORITE } from "./actions/actionTypes"

const initialState = {
  favoriteCities : [],
  selectedCityName : 'Tel Aviv',
  citiesWeather: {}
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
    case ADD_CITY_WEATHER: {
      return {
        ...state,
        citiesWeather: {...state.citiesWeather, ...action.payload}
      }
    };
    default:
      return state
  }
}