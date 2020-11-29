import CityCard from "../CityCard"

const Favorites = ({ citiesWeather }) => (
<div>{Object.keys(citiesWeather).map(cityName => {
  const currentDayWeather = citiesWeather[cityName][0]
  
  return <CityCard key={cityName} cityName={cityName} weather={currentDayWeather}/>})}</div>
)

export default Favorites