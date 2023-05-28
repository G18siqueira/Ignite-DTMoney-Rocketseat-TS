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
import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'
import { useForm } from 'react-hook-form'

const newTransactionFormSchema = z.object({
  description: z.string(),
  category: z.string(),
  price: z.number(),
  // type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const handleCreateNewTransaction = async (data: newTransactionFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <AiOutlineClose size={24} />
        </CloseButton>

        <Form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register('description')}
            required
          />
          <input
            type="number"
            placeholder="Preço"
            {...register('price', { valueAsNumber: true })}
            required
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
            required
          />

          <TransactionType>
            <TransactionTypeButton colorvariant="income" value="income">
              <BsArrowUpCircle size={24} />
              <span>Entrada</span>
            </TransactionTypeButton>
            <TransactionTypeButton colorvariant="outcome" value="outcome">
              <BsArrowDownCircle size={24} />
              <span>Saída</span>
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </Form>
      </Content>
    </Dialog.Portal>
  )
}
