import {useEffect, useState} from "react"
import { fetchedDailyForecasts } from "../../constants"

import {fetchCityKey, fetchUpcomingForecast} from "../../utils/apiUtils"
import {normalizeUpcomingForecast} from "../../utils/utils"

const useFetchCityForecast = (cityName) => {
  const [cityForecast, setCityForecast] = useState('')

  useEffect(() => {
    const getCityForecast = async () => {
      const params = { 
        q: cityName
       };

    // const cityKeyResponse = await fetchCityKey(params);
    // const cityKeyJson = await cityKeyResponse.json();

    // const [{Key: cityKey}] = cityKeyJson

    // const upcomingForecastResponse = await fetchUpcomingForecast(cityKey);
    // const upcomingForecastJson = await upcomingForecastResponse.json();

    // const normalizedUpcomingForecast = normalizeUpcomingForecast(upcomingForecastJson)
    
    // setCityForecast(normalizedUpcomingForecast)
    const forecsat = normalizeUpcomingForecast(fetchedDailyForecasts)

    setCityForecast(forecsat)
    };

    getCityForecast();
  }, []);

  return cityForecast
}

export default useFetchCityForecast