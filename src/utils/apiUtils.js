import { API_URL, FETCH_KEY_PATH, UPCOMING_FORECAST, AUTOCOMPLETE_SEARCH_PATH } from "../constants";

const getQueryParams = (params = {}) => {
  const paramsWithKey = {...params, apikey: process.env.REACT_APP_API_KEY}

  const urlParams = new URLSearchParams(Object.entries(paramsWithKey));

  return urlParams
}

export const fetchCityKey = (params = {}) => {
  const urlParams = getQueryParams(params)

  return fetch(`${API_URL}${FETCH_KEY_PATH}?${urlParams}`)
}

export const fetchUpcomingForecast = (cityKey) => {
  const urlParams = getQueryParams()

  return fetch(`${API_URL}${UPCOMING_FORECAST}${cityKey}?${urlParams}`)
}

export const fetchAutocompleteSearch = (params = {}) => {
  const urlParams = getQueryParams(params)

  return fetch(`${API_URL}${AUTOCOMPLETE_SEARCH_PATH}?${urlParams}`)
}
