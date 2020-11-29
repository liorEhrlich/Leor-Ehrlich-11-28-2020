import Favorite from "../../common/Favorite"

const ToggleFavorite = ({cityName, isFavorite, addFavorite, removeFavorite}) => (
  <Favorite isFavorite={isFavorite} 
  onClick={() => isFavorite ? removeFavorite(cityName) : addFavorite(cityName)}
   />
)

export default ToggleFavorite