import styled from "styled-components";
import CityOverview from "./CityOverview";

const { default: SearchBar } = require("../common/SearchBar");

const Home = () => (
  <Wrapper>
    <SearchBar />
    
    <CityOverview />
  </Wrapper>)

export default Home

const Wrapper = styled.div`
  text-align: center;
  padding: 30px;
`
