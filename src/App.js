import { useState } from "react";

import FavoritesContainer from "./components/favorites/favoritesComponent/FavoritesContainer";
import Home from "./components/home/Home";
import Header from "./components/layout/Header"

function App() {
  const [isHomeSelected, setIsHomeSelected] = useState(true)

  return (
    <div>
      <Header onSetIsHomeSelected={setIsHomeSelected}/>

      {isHomeSelected ?
      <Home /> :
      <FavoritesContainer /> }
    </div>
  );
}

export default App;
