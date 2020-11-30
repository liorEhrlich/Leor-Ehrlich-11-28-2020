import styled from 'styled-components'

import WeatherCard from "../../common/WeatherCard"

const Favorites = ({ citiesWeather }) => (
<Wrapper>{Object.keys(citiesWeather).map(cityName => {
  const currentDayWeather = citiesWeather[cityName][0]
  
  return <WeatherCard title={cityName} 
  desc={currentDayWeather.desc} 
  minTemperature={currentDayWeather.minTemperature}
  maxTemperature={currentDayWeather.maxTemperature}
  />
})}</Wrapper>
)

export default Favorites

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`