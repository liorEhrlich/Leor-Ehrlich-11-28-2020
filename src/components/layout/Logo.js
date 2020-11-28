import styled from "styled-components";
import logoImage from "../../assets/logo.png";

const Logo = () => (
  <Image src={logoImage} alt='log' />
)

export default Logo

const Image = styled.img`
  width: 60px;
`