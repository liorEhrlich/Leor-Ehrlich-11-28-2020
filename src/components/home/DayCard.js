import styled from "styled-components"

const DayCard = ({forecast}) => (
  <Wrapper>
    weather
  </Wrapper>
)

export default DayCard

const Wrapper = styled.div`
  display: inline-block;
  padding: 10px;
  background-color: ${props => props.theme.colors.secondaryBackground};
  margin: 0 10px;
  border-radius: 2px;
  color: ${props => props.theme.colors.primaryContrast};
  border: 4px solid ${props => props.theme.colors.primaryContrast};
  height: 150px;
`