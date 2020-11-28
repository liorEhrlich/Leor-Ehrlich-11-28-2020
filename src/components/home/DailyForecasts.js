import styled from "styled-components"

import DayCard from "./DayCard"

const DailyForecasts = ({dailyForecasts}) => (<Wrapper>
    {dailyForecasts.map((forecast, index) => (
      <DayCard key={`forecast-${index}`} forecast={forecast}/>)
    )}
  </Wrapper>)


export default DailyForecasts

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`