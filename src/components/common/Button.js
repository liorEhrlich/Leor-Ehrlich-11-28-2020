const { default: styled } = require("styled-components");

const Button = styled.button`
  border-radius: 3px;
  padding: 5px;

  :hover {
    cursor: pointer;
  }
`

export default Button