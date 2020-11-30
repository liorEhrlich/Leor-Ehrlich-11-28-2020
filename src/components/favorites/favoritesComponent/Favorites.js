import styled from "styled-components";

import WeatherCard from "../../common/WeatherCard";

const Favorites = ({ citiesWeather, updateCity, setIsHomeViewShown }) => {
  const onCityClick = (cityName) => {
    updateCity(cityName)
    setIsHomeViewShown(true)
  }

  return (
  <Wrapper>
    {Object.keys(citiesWeather).map(cityName => {
      const currentDayWeather = citiesWeather[cityName][0];

      return (
        <CardWrapper onClick={() => onCityClick(cityName)} key={`favorite-${cityName}`}>
          <WeatherCard
            title={cityName}
            desc={currentDayWeather.desc}
            minTemperature={currentDayWeather.minTemperature}
            maxTemperature={currentDayWeather.maxTemperature}
          />
        </CardWrapper>
      );
    })}
  </Wrapper>
)};

export default Favorites;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  margin: 20px;

  :hover {
    cursor: pointer;
  }
`