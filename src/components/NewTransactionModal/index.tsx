import * as Dialog from '@radix-ui/react-dialog'
import { AiOutlineClose } from 'react-icons/ai'
import {
  CloseButton,
  Content,
  Form,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './style'
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <AiOutlineClose size={24} />
        </CloseButton>

        <Form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton colorVariant="income" value="income">
              <BsArrowUpCircle size={24} />
              <span>Entrada</span>
            </TransactionTypeButton>
            <TransactionTypeButton colorVariant="outcome" value="outcome">
              <BsArrowDownCircle size={24} />
              <span>Saída</span>
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </Form>
      </Content>
    </Dialog.Portal>
  )
}
