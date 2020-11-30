import styled from 'styled-components';

import { ReactComponent as FavoriteIcon } from '../../assets/heart.svg';

const Favorite = ({isFavorite, onClick}) => {
  return (
  <Wrapper isFavorite={isFavorite} onClick={onClick}>
    <StyledFavoriteIcon />
  </Wrapper>
)}

const StyledFavoriteIcon = styled(FavoriteIcon)`
  width: 35px;
  height: 35px;
  transition: 0.3s;

  :hover {
    cursor: pointer;
  }
`

const Wrapper = styled.div`
  > ${StyledFavoriteIcon} {
    fill: ${props => props.isFavorite ? props.theme.colors.favorite : props.theme.colors.secondaryBackground};

    :hover {
      fill: ${props => props.isFavorite ? props.theme.colors.secondaryBackground : props.theme.colors.favorite};
    }
  }
`

export default Favorite