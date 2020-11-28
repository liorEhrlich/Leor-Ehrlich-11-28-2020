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
  height: 80px;
`