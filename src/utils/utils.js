import moment from "moment"

export const normalizeUpcomingForecast = (fetchedForecast) => (
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
