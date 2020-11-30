import { ADD_CITY_WEATHER, ADD_FAVORITE, REMOVE_FAVORITE, UPDATE_SELECTED_CITY } from "./actionTypes";

export function addFavorite(cityName) {
  return {
    type: ADD_FAVORITE,
    payload: cityName
  }
}

export function removeFavorite(cityName) {
  return {
    type: REMOVE_FAVORITE,
    payload: cityName
  }
}

export function addCityWeather(cityWeather) {
  return {
    type: ADD_CITY_WEATHER,
    payload: cityWeather
  }
}

export function updateSelectedCity(city) {
  return {
    type: UPDATE_SELECTED_CITY,
    payload: city
  }
}