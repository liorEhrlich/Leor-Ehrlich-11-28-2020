import { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import styled from "styled-components";

import { fetchAutocompleteSearch } from "../../../../utils/apiUtils";
import {
  convertAutocompleteToCities,
  validateEnglishQuery
} from "../../../../utils/utils";
import SeachBarDropdown from "../SeachBarDropdown";

const getCityForecast = async (query, onFetch) => {
  if(query.length === 1){
    return
  }
    const params = {
      q: query
     };

  const autocompleteResponse = await fetchAutocompleteSearch(params);
  const autocompleteResponseJson = await autocompleteResponse.json();

  const autocompleteCities = convertAutocompleteToCities(autocompleteResponseJson)

  onFetch(autocompleteCities)
};

const search = debounce(getCityForecast, 500);

const SearchBar = ({ updateCity, onError }) => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const onChange = (event) => {
    setSelectedCity("");
    setResponse([]);
    
    const { target: {value}} = event

    setQuery(value);

    if (!validateEnglishQuery(value) && value) {
      setQuery("");

      onError(true);
    } else if (value.length) {
      search(value, setResponse);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      setQuery(selectedCity);

      updateCity(selectedCity);
    }
  }, [selectedCity, updateCity]);
  return (
    <Wrapper>
      <Input
        value={query}
        placeholder="City"
        pattern="[a-z][A-Z]"
        onChange={onChange}
      />
      {!selectedCity && (
        <SeachBarDropdown results={response} onCitySelect={setSelectedCity} />
      )}
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 185px;
  font-size: 18px;
  padding: 10px;
`;
