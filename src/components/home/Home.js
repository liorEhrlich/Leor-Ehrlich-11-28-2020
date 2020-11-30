import styled from "styled-components";

import SearchBarContainer from "../common/search/searchBar/SearchBarContainer";
import CityOverviewContainer from "./cityOverview/CityOverviewContainer";


const Home = () => (
  <Wrapper>
    <SearchBarContainer />

    <CityOverviewContainer/>
  </Wrapper>)

export default Home

const Wrapper = styled.div`
  text-align: center;
  padding: 30px;
`
