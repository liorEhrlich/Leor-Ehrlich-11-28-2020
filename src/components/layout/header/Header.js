import styled from "styled-components";
import Button from "../../common/Button";
import Toggle from "../../common/Toggle";

import Logo from "../Logo";

const Header = ({ onSetIsHomeSelected, isFerenheit, setIsFerenheit, isThemeLight, setIsThemeLight }) => (
  <Wrapper>
    <Logo />

    <ButtonsWrapper>
      <Toggle
        onLabel="☀"
        offLabel="☾"
        onToggle={setIsThemeLight}
        isOn={isThemeLight}
      />

      <Toggle
        onLabel="°F"
        offLabel="°C"
        onToggle={setIsFerenheit}
        isOn={isFerenheit}
      />

      <Button onClick={onSetIsHomeSelected}>Home</Button>

      <Button onClick={() => onSetIsHomeSelected(false)}>Favorites</Button>
    </ButtonsWrapper>
  </Wrapper>
);

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  background-color: ${props => props.theme.colors.secondaryBackground};

  @media ${props => props.theme.mobile}{
    font-size: 10px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`