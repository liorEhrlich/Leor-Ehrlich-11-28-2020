import styled from "styled-components";
import logoImage from "../../assets/logo.png";

const Logo = () => (
  <Wrapper>
    <Image src={logoImage} alt="log" />
    <Title>Weather App</Title>
  </Wrapper>
);

export default Logo;

const Wrapper = styled.div``;

const Image = styled.img`
  width: 45px;
`;

const Title = styled.h1`
  font-size: 12px;
  margin: 0;
  color: ${props => props.theme.colors.primaryContrast};
  font-weight: bold;
`;
