import styled from "styled-components"

const CityOverview = () => (
  <Wrapper>
    <Name>Tel Aviv</Name>
  </Wrapper>
)

export default CityOverview

const Wrapper = styled.div`
  border-radius: 3px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryBackground};
  margin-top: 20px;
  padding: 20px;
`

const Name = styled.h2`
  font-size: 28px;
`