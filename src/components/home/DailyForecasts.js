import styled from "styled-components"
import DayForecast from "./DayForecast"

const DailyForecasts = ({dailyForecasts}) => (<Wrapper>
    {dailyForecasts.map((forecast, index) => (
      <DayForecast key={`forecast-${index}`} forecast={forecast}/>)
    )}
  </Wrapper>)


export default DailyForecasts

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`