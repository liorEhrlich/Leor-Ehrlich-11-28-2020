import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: ${props => props.theme.colors.primaryBackground};
  }
`

export default GlobalStyle