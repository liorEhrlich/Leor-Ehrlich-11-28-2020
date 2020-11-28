import { API_URL } from "./constants";

export const fetchFromApi = (params = {}) => {
  const paramsWithKey = {...params, apikey: process.env.REACT_APP_API_KEY}

  const urlParams = new URLSearchParams(Object.entries(paramsWithKey));

  return fetch(`${API_URL}?${urlParams}`)
}