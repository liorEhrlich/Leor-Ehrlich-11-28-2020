import styled from 'styled-components';
import { ReactComponent as FavoriteIcon } from '../../assets/heart.svg';

const Favorite = styled(FavoriteIcon)`
  width: 35px;
  height: 35px;
  fill: ${props => props.isFavorite ? props.theme.colors.favorite : props.theme.colors.secondaryBackground};
  transition: 0.3s;

  :hover {
    cursor: pointer;
    fill: ${props => props.isFavorite ? props.theme.colors.secondaryBackground : props.theme.colors.favorite};
  }
`

export default Favorite