import { API_URL, FETCH_KEY_PATH, UPCOMING_FORECAST } from "./constants";

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
