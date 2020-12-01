import FavoritesContainer from "../favorites/favoritesComponent/FavoritesContainer";
import Home from "../home/Home";
import HeaderContainer from "../layout/header/HeaderContainer"

const App = ({ isHomeViewShown, setIsHomeViewShown}) => (<div>
    <HeaderContainer onSetIsHomeSelected={setIsHomeViewShown}/>

      {isHomeViewShown ?
      <Home /> :
      <FavoritesContainer /> }
    </div>
  );


export default App;
