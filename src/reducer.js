import { ADD_CITY_FORECAST, ADD_FAVORITE, REMOVE_FAVORITE } from "./actionTypes"

const initialState = {
  favoriteCitiesIds : [],
  citiesForecast : {}
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE: {
      return {
        ...state,
        favoriteCitiesIds: [...state.favoriteCitiesIds, action.payload.cityId]
      }
    };
    case REMOVE_FAVORITE: {
      return {
        ...state,
        favoriteCitiesIds: state.favoriteCitiesIds.filter(cityId => cityId !== action.payload.cityId)
      }
    };
    case ADD_CITY_FORECAST: {
      return {
        ...state,
        citiesForecast: {...state.citiesForecast, 
          [action.payload.cityId]: action.payload.upcomingForecast
        }
      }
    };
    default:
      return state
  }
}