import styled from 'styled-components'

const WeatherCard = ({title, desc, minTemperature, maxTemperature}) => (<Wrapper>
  <Title>{title}</Title>
  <Desc>{desc}</Desc>
  <Temperature>{`${minTemperature} - ${maxTemperature}`}</Temperature>
</Wrapper>
)

export default WeatherCard

const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
  padding: 10px;
  background-color: ${props => props.theme.colors.primaryBackground};
  margin: 20px;
  border-radius: 2px;
  border: 4px solid ${props => props.theme.colors.primaryContrast};
  height: 170px;
  width: 110px;
  font-weight: bold;
`

const Title = styled.div`
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