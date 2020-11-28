import { useState } from "react";
import debounce from 'lodash/debounce';
import styled from "styled-components";

const search = debounce(console.log, 1000);

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const onChange = (event) =>
  {
    const { target: {value}} = event

    setQuery(value);

    search(value)
  }
  return (
  <Input value={query} placeholder="City" onChange={onChange} />
)}

export default SearchBar

const Input = styled.input`
    width: 140px;
    font-size: 18px;
    padding: 10px;
`