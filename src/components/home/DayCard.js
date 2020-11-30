import styled from "styled-components"

const DayCard = ({forecast}) =>  (
  <Wrapper>
    <Day>
      {forecast.day}
    </Day>

    <Desc>
      {forecast.desc}
      </Desc>
    <Temperature>{`${forecast.minTemperature} - ${forecast.maxTemperature}`}</Temperature>
  </Wrapper>
)

export default DayCard

const Wrapper = styled.div`
  display: inline-block;
  padding: 10px;
  background-color: ${props => props.theme.colors.primaryBackground};
  margin: 0 10px;
  border-radius: 2px;
  border: 4px solid ${props => props.theme.colors.primaryContrast};
  height: 120px;
  width: 110px;
  font-weight: bold;
`

const Day = styled.div`
  word-break: break-word;
  font-size: 18px;
  color: ${props => props.theme.colors.tertiary};
  margin-top: 10px;
`

const Desc = styled.div`
  word-break: break-word;
  font-size: 16px;
  color: ${props => props.theme.colors.secondary};
  margin-top: 10px;
`

const Temperature = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};
  margin-top: 10px;
`