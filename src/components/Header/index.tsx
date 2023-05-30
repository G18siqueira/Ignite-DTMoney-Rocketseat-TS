import * as Dialog from '@radix-ui/react-dialog'
import { Container } from '../../styles/global'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImg from '../../assets/logo.svg'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal setIsOpen={setIsOpen} />
          </Dialog.Root>
        </HeaderContent>
      </Container>
    </HeaderContainer>
  )
}
