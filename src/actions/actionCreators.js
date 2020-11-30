import { ADD_CITY_WEATHER, ADD_FAVORITE, REMOVE_FAVORITE, SET_IS_HOME_VIEW_SHOWN, UPDATE_SELECTED_CITY, SET_IS_FERENHEIT } from "./actionTypes";

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

export function setIsHomeViewShown(isShown) {
  return {
    type: SET_IS_HOME_VIEW_SHOWN,
    payload: isShown
  }
}

export function setIsFerenheit(isFerenheit) {
  return {
    type: SET_IS_FERENHEIT,
    payload: isFerenheit
  }
}