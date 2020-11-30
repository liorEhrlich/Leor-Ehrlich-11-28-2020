import styled from "styled-components"

const Toggle = ({onLabel, offLabel, isOn, onToggle}) => {
  return (
    <span>
      <ToggleButton onClick={onToggle} isOn={isOn}>{onLabel}</ToggleButton>
      <ToggleButton onClick={() => onToggle(false)} isOn={!isOn}>{offLabel}</ToggleButton>
    </span>
  )
}

export default Toggle

const ToggleButton = styled.button`
  border-radius: 50%;
  margin-left: 5px;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.primaryBackground};
  font-weight: bold;
  opacity: ${props => props.isOn ? 1 : 0.5};
  border: 2px solid ${props => props.theme.colors.primary};
  font-size: 12px;

  :hover {
    cursor: pointer
  }
`