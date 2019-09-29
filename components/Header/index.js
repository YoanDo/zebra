import {
  HeaderWrap,
} from './styles'
import logoImg from './resources/logo.png'

const Header = () => (
  <HeaderWrap>
    <img src={logoImg} alt="Les zébres crystalins" />
  </HeaderWrap>
)

export default Header
