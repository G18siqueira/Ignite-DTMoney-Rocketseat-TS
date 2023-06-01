import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useMemo } from 'react'

export const useSummary = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  const summary = useMemo(() => {
    let lastSavedDateIncome = ''
    let lastSavedDateOutcome = ''

    return transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === 'income') {
          accumulator.income += transaction.price
          accumulator.total += transaction.price
          if (transaction.createdAt > lastSavedDateIncome) {
            lastSavedDateIncome = transaction.createdAt
          }
        } else if (transaction.type === 'outcome') {
          accumulator.outcome += transaction.price
          accumulator.total -= transaction.price
          if (transaction.createdAt > lastSavedDateOutcome) {
            lastSavedDateOutcome = transaction.createdAt
          }
        }

        accumulator.lastDateIncome = lastSavedDateIncome
        accumulator.lastDateOutcome = lastSavedDateOutcome

        return accumulator
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
        lastDateIncome: '',
        lastDateOutcome: '',
      },
    )
  }, [transactions])

  return { summary }
}
