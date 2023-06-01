import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import React from 'react'
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

import { Controller, useForm } from 'react-hook-form'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const newTransactionFormSchema = z.object({
  description: z.string(),
  category: z.string(),
  price: z.number(),
  type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

interface NewTransactionModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewTransactionModal = ({
  setIsOpen,
}: NewTransactionModalProps) => {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction
    },
  )

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const handleCreateNewTransaction = async (data: newTransactionFormInputs) => {
    const { description, type, category, price } = data
    await createTransaction({ description, type, category, price })

    setIsOpen(false)
    reset()
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
            step="any"
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

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton colorvariant="income" value="income">
                    <BsArrowUpCircle size={24} />
                    <span>Entrada</span>
                  </TransactionTypeButton>
                  <TransactionTypeButton colorvariant="outcome" value="outcome">
                    <BsArrowDownCircle size={24} />
                    <span>Saída</span>
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </Form>
      </Content>
    </Dialog.Portal>
  )
}
