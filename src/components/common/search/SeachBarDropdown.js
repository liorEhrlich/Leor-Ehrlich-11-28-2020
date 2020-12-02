import styled from "styled-components";

const SeachBarDropdown = ({ results, onCitySelect }) => {
  if (!results.length) {
    return null;
  }
  return (
    <Cities>
      {results.map(city => (
        <City key={city} onClick={e => onCitySelect(e.target.innerHTML)}>
          {city}
        </City>
      ))}
    </Cities>
  );
};

export default SeachBarDropdown;

const Cities = styled.ul`
  position: absolute;
  top: 145px;
  width: 185px;
  list-style: none;
  background-color: ${props => props.theme.colors.primaryBackground};
  margin: 0;
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primaryContrast};
  border-radius: 2px;
`;

const City = styled.li`
  padding: 5px;
  border-bottom: 2px solid ${props => props.theme.colors.primaryContrast};
  transition: 0.3s;
  color: ${props => props.theme.colors.defaultFont};

  :last-of-type {
    border-bottom: none;
  }
  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
