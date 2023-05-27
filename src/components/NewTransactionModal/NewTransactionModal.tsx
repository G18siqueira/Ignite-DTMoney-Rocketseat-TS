import { AiOutlineClose } from 'react-icons/ai'
import { CloseButton, Content, Overlay } from './style'

import * as Dialog from '@radix-ui/react-dialog'

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <AiOutlineClose size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
