import React, { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'
import { Controller, useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CloseButton,
  Content,
  Form,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './style'
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'

import {
  TransactionsContext,
  TransactionsType,
} from '../../contexts/TransactionsContext'

import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'

const editTransactionFormSchema = z.object({
  id: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  type: z.enum(['income', 'outcome']),
  createdAt: z.string(),
})

type editTransactionFormInputs = z.infer<typeof editTransactionFormSchema>

interface EditTransactionModalProps {
  selectedTransaction: TransactionsType | null
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditTransactionModal = ({
  selectedTransaction,
  setIsOpen,
}: EditTransactionModalProps) => {
  const editTransaction = useContextSelector(TransactionsContext, (context) => {
    return context.editTransaction
  })

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<editTransactionFormInputs>({
    resolver: zodResolver(editTransactionFormSchema),
  })

  useEffect(() => {
    if (selectedTransaction) {
      setValue('id', selectedTransaction.id)
      setValue('description', selectedTransaction.description)
      setValue('category', selectedTransaction.category)
      setValue('price', selectedTransaction.price)
      setValue('type', selectedTransaction.type)
      setValue('createdAt', selectedTransaction.createdAt)
      console.log(Number(selectedTransaction.id))
    }
  }, [selectedTransaction, setValue])

  const handleEditTransaction = async (data: editTransactionFormInputs) => {
    await editTransaction(data)
    setIsOpen(false)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Editar Transação</Dialog.Title>

        <CloseButton>
          <AiOutlineClose size={24} />
        </CloseButton>

        <Form onSubmit={handleSubmit(handleEditTransaction)}>
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
            Editar
          </button>
        </Form>
      </Content>
    </Dialog.Portal>
  )
}
