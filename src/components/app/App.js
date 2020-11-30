import { useState } from "react";

import FavoritesContainer from "../favorites/favoritesComponent/FavoritesContainer";
import Home from "../home/Home";
import Header from "../layout/Header"

const App = ({ isHomeViewShown, setIsHomeViewShown}) => (<div>
    <Header onSetIsHomeSelected={setIsHomeViewShown}/>

      {isHomeViewShown ?
      <Home /> :
      <FavoritesContainer /> }
    </div>
  );


export default App;
