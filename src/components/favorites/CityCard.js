import styled from "styled-components"

const CityCard = ({cityName, weather}) => (
<Wrapper>
  <Name>{cityName}</Name>
  <Desc>{weather.desc}</Desc>
  <Temperature>{`${weather.minTemperature} - ${weather.maxTemperature}`}</Temperature>
</Wrapper>)

export default CityCard

const Wrapper = styled.div`

`

const Name = styled.div`

`

const Desc = styled.div`

`

const Temperature = styled.div`

`