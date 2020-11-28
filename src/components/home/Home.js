import styled from "styled-components";

import SearchBar from "../common/SearchBar";
import CityOverviewContainer from "./cityOverview/CityOverviewContainer";


const Home = () => (
  <Wrapper>
    <SearchBar />

    <CityOverviewContainer/>
  </Wrapper>)

export default Home

const Wrapper = styled.div`
  text-align: center;
  padding: 30px;
`
