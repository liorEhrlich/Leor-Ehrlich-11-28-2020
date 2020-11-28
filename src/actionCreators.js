import { ADD_CITY_FORECAST, ADD_FAVORITE, REMOVE_FAVORITE } from "./actionTypes";

export function addFavorite(cityId) {
  return {
    type: ADD_FAVORITE,
    payload: cityId
  }
}

export function removeFavorite(cityId) {
  return {
    type: REMOVE_FAVORITE,
    payload: cityId
  }
}

export function addCityForecast(city) {
  return {
    type: ADD_CITY_FORECAST,
    payload: city
  }
}