import { Container } from '../../styles/global'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImg from '../../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          <img src={logoImg} alt="" />
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </HeaderContent>
      </Container>
    </HeaderContainer>
  )
}
