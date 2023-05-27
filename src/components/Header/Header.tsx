import { Container } from '../../styles/global'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal/NewTransactionModal'

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </Container>
    </HeaderContainer>
  )
}
