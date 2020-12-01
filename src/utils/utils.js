import moment from "moment"

export const convertUpcomingForecast = (fetchedForecast) => (
  fetchedForecast.map(forecast => {
    return {
      date: forecast.Date,
      day: moment(forecast.Date).format('dddd'),
      minTemperature: forecast.Temperature.Minimum.Value,
      maxTemperature: forecast.Temperature.Maximum.Value,
      desc: forecast.Day.IconPhrase
    }
  })
)

export const convertAutocompleteToCities = (fetchedAutocomplete) => (
  fetchedAutocomplete.map(city => `${city.LocalizedName}, ${city.Country.LocalizedName}`)
)

export const validateQuery = (value) => {
  const regex = RegExp('[a-zA-Z-]');

  return regex.test(value)
}

export const ferenheitToCelsius = (temperature) => {
  const celsius = Math.round((parseInt(temperature) - 32) * 5/9) ;
  
  return celsius
}