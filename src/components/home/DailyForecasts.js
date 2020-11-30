import styled from "styled-components";

import WeatherCardContainer from "../common/weatherCard/WeatherCardContainer";

const DailyForecasts = ({ dailyForecasts = [] }) => (
  <Wrapper>
    {dailyForecasts.map((forecast, index) => (
      <WeatherCardContainer
        key={`forecast-${index}`}
        title={forecast.day}
        desc={forecast.desc}
        minTemperature={forecast.minTemperature}
        maxTemperature={forecast.maxTemperature}
      />
    ))}
  </Wrapper>
);

export default DailyForecasts;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
