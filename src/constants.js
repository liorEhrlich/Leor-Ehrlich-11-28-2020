export const API_URL = "http://dataservice.accuweather.com/"

export const FETCH_KEY_PATH = "locations/v1/search"

export const UPCOMING_FORECAST = "forecasts/v1/daily/5day/"

export const AUTOCOMPLETE_SEARCH_PATH = "locations/v1/cities/autocomplete"

export const fetchedDailyForecasts = [
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

export const autocompleteFetchedData = ["New Territories, Hong Kong", "New York, United States", "New Delhi, India", "New Taipei City, Taiwan", "Newcastle, South Africa", "Newcastle, Australia", "New Cairo, Egypt", "New Orleans, United States", "Newark, United States", "Newcastle upon Tyne, United Kingdom"]