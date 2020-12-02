import { ThemeProvider } from "styled-components";

import FavoritesContainer from "../favorites/favoritesComponent/FavoritesContainer";
import Home from "../home/Home";
import HeaderContainer from "../layout/header/HeaderContainer";
import { lightTheme, darkTheme } from "../../theme";
import GlobalStyle from "../GlobalStyle";
import { useState } from "react";

const App = ({ isHomeViewShown, setIsHomeViewShown }) => {
  const [isThemeLight, setIsThemeLight] = useState(true)

  return (
  <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
    <GlobalStyle />

    <div>
      <HeaderContainer onSetIsHomeSelected={setIsHomeViewShown} isThemeLight={isThemeLight} setIsThemeLight={setIsThemeLight}/>

      {isHomeViewShown ? <Home /> : <FavoritesContainer />}
    </div>
  </ThemeProvider>
  
)};

export default App;
