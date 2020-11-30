import { useState } from "react";
import styled from "styled-components";

import Modal from "../common/Modal";
import Button from "../common/Button";
import SearchBarContainer from "../common/search/searchBar/SearchBarContainer";
import CityOverviewContainer from "./cityOverview/CityOverviewContainer";

const Home = () => {
  const [isError, setIsError] = useState(false);

  return (
    <Wrapper>
      <Modal isOpen={isError}>
        <div>Please type the city name in English</div>
        <Button onClick={() => setIsError(false)}>I understand</Button>
      </Modal>
      <SearchBarContainer onError={setIsError} />

      <CityOverviewContainer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  text-align: center;
  padding: 30px;
`;
