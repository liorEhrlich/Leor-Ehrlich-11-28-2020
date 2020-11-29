import { ADD_CITY_WEATHER, ADD_FAVORITE, REMOVE_FAVORITE } from "./actionTypes";

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
