import styled from "styled-components";

import DailyForecasts from "../DailyForecasts";
import ToggleFavoriteContainer from "../toggleFavorite/ToggleFavoriteContainer";
import useFetchCityForecast from "../useFetchCityForecast";

const CityOverview = ({ cityName, cityWeather, addCityWeather }) => {
  const cityForecast = useFetchCityForecast(
    cityName,
    cityWeather,
    addCityWeather
  );

  return (
    <Wrapper>
      <TopSection>
        <Name>{cityName}</Name>

        <ToggleFavoriteContainer />
      </TopSection>

      {cityForecast && (
        <>
          <WeatherDescription>{cityForecast[0].desc}</WeatherDescription>

          <SubTitle>This week's forecast</SubTitle>
          <DailyForecasts dailyForecasts={cityForecast} />
        </>
      )}
    </Wrapper>
  );
};

export default CityOverview;

const Wrapper = styled.div`
  border-radius: 3px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryBackground};
  margin-top: 20px;
  padding: 20px 30px;
`;

const Name = styled.h2`
  font-size: 28px;
  color: ${props => props.theme.colors.primaryBackground};
  background-color: ${props => props.theme.colors.secondary};
  padding: 5px;
  border-radius: 2px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeatherDescription = styled.h3`
  font-size: 36px;
  color: ${props => props.theme.colors.primaryBackground};
`;

const SubTitle = styled.h4`
  margin-top: 55px;
  font-size: 24px;
  color: ${props => props.theme.colors.primaryBackground};
`;
