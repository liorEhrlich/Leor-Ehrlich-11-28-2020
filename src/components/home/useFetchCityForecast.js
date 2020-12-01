import { useEffect, useState } from "react";

import { fetchCityKey, fetchUpcomingForecast } from "../../utils/apiUtils";
import { convertUpcomingForecast } from "../../utils/utils";

const useFetchCityForecast = (cityName, cityWeather, addCityWeather) => {
  const [fetchedCityWeather, setFetchedCityWeather] = useState(cityWeather);

  useEffect(() => {
    const getCityForecast = async () => {
        const params = {
          q: cityName
         };

      const cityKeyResponse = await fetchCityKey(params);
      const cityKeyJson = await cityKeyResponse.json();

      const [{Key: cityKey}] = cityKeyJson

      const upcomingForecastResponse = await fetchUpcomingForecast(cityKey);
      const upcomingForecastJson = await upcomingForecastResponse.json();

      const convertedUpcomingForecast = convertUpcomingForecast(upcomingForecastJson.DailyForecasts)

      setFetchedCityWeather(convertedUpcomingForecast)

      const cityWeather = {[cityName] : convertedUpcomingForecast}

      addCityWeather(cityWeather)
    };
    if(!cityWeather.length){
      getCityForecast();
    }
  }, [cityName, addCityWeather, cityWeather.length]);

  return fetchedCityWeather;
};

export default useFetchCityForecast;
