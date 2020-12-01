import { useEffect, useState } from "react";
import { fetchedDailyForecasts } from "../../constants";

import { fetchCityKey, fetchUpcomingForecast } from "../../utils/apiUtils";
import { convertUpcomingForecast } from "../../utils/utils";

const useFetchCityForecast = (cityName, cityWeather, addCityWeather) => {
  const [cityForecast, setCityForecast] = useState(cityWeather);

  useEffect(() => {
    const getCityForecast = async () => {
      //   const params = {
      //     q: cityName
      //    };

      // const cityKeyResponse = await fetchCityKey(params);
      // const cityKeyJson = await cityKeyResponse.json();

      // const [{Key: cityKey}] = cityKeyJson

      // const upcomingForecastResponse = await fetchUpcomingForecast(cityKey);
      // const upcomingForecastJson = await upcomingForecastResponse.json();

      // const normalizedUpcomingForecast = convertUpcomingForecast(upcomingForecastJson.DailyForecasts)

      // setCityForecast(normalizedUpcomingForecast)

      // const cityWeather = {[cityName] : normalizedUpcomingForecast}

      // addCityWeather(cityWeather)

      const forecsat = convertUpcomingForecast(fetchedDailyForecasts);

      setCityForecast(forecsat);

      const cityWeather = { [cityName]: forecsat };

      addCityWeather(cityWeather);
    };

    getCityForecast();
  }, [cityName, addCityWeather]);

  return cityForecast;
};

export default useFetchCityForecast;
