import { useEffect } from "react"
import styled from "styled-components"

import { fetchCityKey, fetchUpcomingForecast } from "../../../utils"
import Favorite from "../../common/Favorite"
import DailyForecasts from "../DailyForecasts"

const fetchedDailyForecasts = [
  {
    "Date": "2020-11-28T07:00:00+02:00",
    "EpochDate": 1606539600,
    "Temperature": {
      "Minimum": {
        "Value": 48,
        "Unit": "F",
        "UnitType": 18
      },
      "Maximum": {
        "Value": 68,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Day": {
      "Icon": 14,
      "IconPhrase": "Partly sunny w/ showers",
      "HasPrecipitation": true,
      "PrecipitationType": "Rain",
      "PrecipitationIntensity": "Light"
    },
    "Night": {
      "Icon": 34,
      "IconPhrase": "Mostly clear",
      "HasPrecipitation": false
    },
    "Sources": [
      "AccuWeather"
    ],
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
  },
  {
    "Date": "2020-11-29T07:00:00+02:00",
    "EpochDate": 1606626000,
    "Temperature": {
      "Minimum": {
        "Value": 47,
        "Unit": "F",
        "UnitType": 18
      },
      "Maximum": {
        "Value": 69,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Day": {
      "Icon": 2,
      "IconPhrase": "Mostly sunny",
      "HasPrecipitation": false
    },
    "Night": {
      "Icon": 33,
      "IconPhrase": "Clear",
      "HasPrecipitation": false
    },
    "Sources": [
      "AccuWeather"
    ],
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
  },
  {
    "Date": "2020-11-30T07:00:00+02:00",
    "EpochDate": 1606712400,
    "Temperature": {
      "Minimum": {
        "Value": 47,
        "Unit": "F",
        "UnitType": 18
      },
      "Maximum": {
        "Value": 71,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Day": {
      "Icon": 1,
      "IconPhrase": "Sunny",
      "HasPrecipitation": false
    },
    "Night": {
      "Icon": 33,
      "IconPhrase": "Clear",
      "HasPrecipitation": false
    },
    "Sources": [
      "AccuWeather"
    ],
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
  },
  {
    "Date": "2020-12-01T07:00:00+02:00",
    "EpochDate": 1606798800,
    "Temperature": {
      "Minimum": {
        "Value": 49,
        "Unit": "F",
        "UnitType": 18
      },
      "Maximum": {
        "Value": 69,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Day": {
      "Icon": 3,
      "IconPhrase": "Partly sunny",
      "HasPrecipitation": false
    },
    "Night": {
      "Icon": 35,
      "IconPhrase": "Partly cloudy",
      "HasPrecipitation": false
    },
    "Sources": [
      "AccuWeather"
    ],
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
  },
  {
    "Date": "2020-12-02T07:00:00+02:00",
    "EpochDate": 1606885200,
    "Temperature": {
      "Minimum": {
        "Value": 47,
        "Unit": "F",
        "UnitType": 18
      },
      "Maximum": {
        "Value": 66,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "Day": {
      "Icon": 2,
      "IconPhrase": "Mostly sunny",
      "HasPrecipitation": false
    },
    "Night": {
      "Icon": 34,
      "IconPhrase": "Mostly clear",
      "HasPrecipitation": false
    },
    "Sources": [
      "AccuWeather"
    ],
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
  }
]

const CityOverview = ({city}) => {
  useEffect(() => {
    const getCityKey = async () => {
      const params = { 
        q: city
       };

    const cityKeyResponse = await fetchCityKey(params);
    const cityKeyJson = await cityKeyResponse.json();

    const [{Key: cityKey}] = cityKeyJson
    
    console.log('cityKey', cityKey);
    
    const upcomingForecastResponse = await fetchUpcomingForecast(cityKey);
    const upcomingForecastJson = await upcomingForecastResponse.json();

    console.log('upcomingForecastJson', upcomingForecastJson);
    };
 
    getCityKey();
  }, [city]);

  return (
  <Wrapper>
    <TopSection>
      <Name>{city}</Name>

      <Favorite />
    </TopSection>

    <WeatherDescription>Some cloudsss</WeatherDescription>

    <SubTitle>This week's forecast</SubTitle>
    <DailyForecasts dailyForecasts={fetchedDailyForecasts} />
  </Wrapper>
)}

export default CityOverview

const Wrapper = styled.div`
  border-radius: 3px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryBackground};
  margin-top: 20px;
  padding: 20px 30px;
`

const Name = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.colors.primaryBackground};
  background-color: ${props => props.theme.colors.secondary};
  padding: 5px;
  border-radius: 2px;
`

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const WeatherDescription = styled.h3`
  font-size: 36px;
  color: ${props => props.theme.colors.primaryBackground};
`

const SubTitle = styled.h4`
  margin-top: 55px;
  font-size: 24px;
  color: ${props => props.theme.colors.primaryBackground};
`