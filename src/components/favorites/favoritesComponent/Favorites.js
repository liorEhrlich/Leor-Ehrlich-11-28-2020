import CityCard from "../CityCard"

const Favorites = ({ favoriteCitiesWeather = [] }) => (
<div>{Object.keys(favoriteCitiesWeather).map(cityId => <CityCard key={cityId} city={favoriteCitiesWeather[cityId]}/>)}</div>
)

export default Favorites