import CityCard from "../CityCard"

const Favorites = ({ favoriteCities = [] }) => (
<div>{favoriteCities.map(cityName => <CityCard key={cityName} cityName={cityName}/>)}</div>
)

export default Favorites