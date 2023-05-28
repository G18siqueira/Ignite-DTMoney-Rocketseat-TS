import { ReactNode, createContext, useEffect, useState } from 'react'

interface TransactionsType {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}
interface TransactionsContextType {
  transactions: TransactionsType[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  useEffect(() => {
    const loadTransactions = async () => {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()

      setTransactions(data)
    }

    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
