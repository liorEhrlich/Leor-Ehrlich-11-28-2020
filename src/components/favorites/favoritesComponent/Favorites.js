import styled from "styled-components";

import WeatherCardContainer from "../../common/weatherCard/WeatherCardContainer";

const Favorites = ({ citiesWeather, updateCity, setIsHomeViewShown }) => {
  const onCityClick = (cityName) => {
    updateCity(cityName)
    setIsHomeViewShown(true)
  }

  return (
  <Wrapper>
    {!Object.keys(citiesWeather).length &&
      <NoFavoritesMessage>No favorites yet. Feel free to add them from the home view.</NoFavoritesMessage>
    }
    {Object.keys(citiesWeather).map(cityName => {
      const currentDayWeather = citiesWeather[cityName][0];

      return (
        <CardWrapper onClick={() => onCityClick(cityName)} key={`favorite-${cityName}`}>
          <WeatherCardContainer
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

const NoFavoritesMessage = styled.p`
  margin-left: 20px;
  font-size: 18px;
`