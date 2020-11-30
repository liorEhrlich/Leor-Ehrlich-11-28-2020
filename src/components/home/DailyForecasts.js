import styled from "styled-components";

import WeatherCard from "../common/WeatherCard";

const DailyForecasts = ({ dailyForecasts = [] }) => (
  <Wrapper>
    {dailyForecasts.map((forecast, index) => (
      <WeatherCard
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
