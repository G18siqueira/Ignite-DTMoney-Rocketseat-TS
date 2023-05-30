import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface TransactionsType {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  category: string
  price: number
  type: 'income' | 'outcome'
}

interface EditTransactionInput {
  id?: number
  description: string
  category: string
  price: number
  type: 'income' | 'outcome'
}

interface DeleteTransactionInput {
  id: number
}

interface TransactionsContextType {
  transactions: TransactionsType[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  editTransaction: (transactionToEdit: EditTransactionInput) => Promise<void>
  deleteTransaction: (
    transactionToDelete: DeleteTransactionInput,
  ) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: { _sort: 'createdAt', _order: 'desc', q: query },
    })

    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, type, category, price } = data

      const response = await api.post('transactions', {
        description,
        type,
        category,
        price,
        createdAt: new Date(),
      })
      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  const editTransaction = useCallback(
    async (transactionToEdit: EditTransactionInput) => {
      const { id, description, type, category, price } = transactionToEdit

      const response = await api.put(`/transactions/${id}`, {
        description,
        type,
        category,
        price,
        createdAt: new Date(),
      })

      setTransactions((state) =>
        state.map((item) => (item.id === id ? response.data : item)),
      )
    },
    [],
  )

  const deleteTransaction = useCallback(
    async (transactionToDelete: DeleteTransactionInput) => {
      await api.delete(`/transactions/${transactionToDelete.id}`)
      setTransactions((state) =>
        state.filter((item) => item.id !== transactionToDelete.id),
      )
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        editTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
