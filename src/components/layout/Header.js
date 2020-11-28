import styled from 'styled-components'
import Button from '../common/Button'

import Logo from './Logo'

const Header = () => (
  <Wrapper>
    <Logo />

    <div >
      <Button>
        Home
      </Button>

      <Button>
        Favorites
      </Button>
    </div>
  </Wrapper>
)

export default Header

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  background-color: ${props => props.theme.colors.secondaryBackground};
`