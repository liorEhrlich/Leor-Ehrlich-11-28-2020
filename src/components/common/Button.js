const { default: styled } = require("styled-components");

const Button = styled.button`
  border-radius: 3px;
  padding: 5px;
  background-color: ${props => props.theme.colors.tertiary};
  font-weight: bold;
  color: ${props => props.theme.colors.primaryBackground};
  border: 2px solid ${props => props.theme.colors.secondary};

  :hover {
    cursor: pointer;
  }
`

export default Button