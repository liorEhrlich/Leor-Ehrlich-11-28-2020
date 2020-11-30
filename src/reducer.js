import { ADD_CITY_WEATHER, ADD_FAVORITE, REMOVE_FAVORITE, SET_IS_FERENHEIT, SET_IS_HOME_VIEW_SHOWN, UPDATE_SELECTED_CITY } from "./actions/actionTypes"

const initialState = {
  favoriteCities : [],
  selectedCityName : 'Tel Aviv',
  citiesWeather: {},
  isHomeViewShown: true,
  isFerenheit: true
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
    case UPDATE_SELECTED_CITY: {
      return {
        ...state,
        selectedCityName: action.payload
      }
    }
    case SET_IS_HOME_VIEW_SHOWN: {
      return {
        ...state,
        isHomeViewShown: action.payload
      }
    }
    case SET_IS_FERENHEIT: {
      return {
        ...state,
        isFerenheit: action.payload
      }
    }
    default:
      return state
  }
}