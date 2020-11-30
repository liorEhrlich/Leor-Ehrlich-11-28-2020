import WeatherCard from "../../common/WeatherCard"

const Favorites = ({ citiesWeather }) => (
<div>{Object.keys(citiesWeather).map(cityName => {
  const currentDayWeather = citiesWeather[cityName][0]
  
  return <WeatherCard title={cityName} 
  desc={currentDayWeather.desc} 
  minTemperature={currentDayWeather.minTemperature}
  maxTemperature={currentDayWeather.maxTemperature}
  />
})}</div>
)

export default Favorites