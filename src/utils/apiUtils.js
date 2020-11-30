import { API_URL, FETCH_KEY_PATH, UPCOMING_FORECAST, AUTOCOMPLETE_SEARCH_PATH } from "../constants";

export const fetchCityKey = (params = {}) => {
  const paramsWithKey = {...params, apikey: process.env.REACT_APP_API_KEY}

  const urlParams = new URLSearchParams(Object.entries(paramsWithKey));

  return fetch(`${API_URL}${FETCH_KEY_PATH}?${urlParams}`)
}

export const fetchUpcomingForecast = (cityKey) => {
  const paramsWithKey = {apikey: process.env.REACT_APP_API_KEY}

  const urlParams = new URLSearchParams(Object.entries(paramsWithKey));

  return fetch(`${API_URL}${UPCOMING_FORECAST}${cityKey}?${urlParams}`)
}

export const fetchAutocompleteSearch = (params = {}) => {
  const paramsWithKey = {...params, apikey: process.env.REACT_APP_API_KEY}

  const urlParams = new URLSearchParams(Object.entries(paramsWithKey));

  return fetch(`${API_URL}${AUTOCOMPLETE_SEARCH_PATH}?${urlParams}`)
}