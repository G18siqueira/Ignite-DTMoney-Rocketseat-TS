import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useMemo } from 'react'

export const useSummary = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    const incomeSummary = transactions.reduce(
      (accumulator, transaction) => {
        const transactionType = transaction.type === 'income'
        const transactionLastDate =
          transaction.createdAt > accumulator.lastIncomeDate

        if (transactionType && transactionLastDate) {
          accumulator.income += transaction.price
          accumulator.total += transaction.price
          accumulator.lastIncomeDate = transaction.createdAt
        }
        return accumulator
      },
      { income: 0, outcome: 0, total: 0, lastIncomeDate: '' },
    )

    const outcomeSummary = transactions.reduce(
      (accumulator, transaction) => {
        const transactionType = transaction.type === 'outcome'
        const transactionLastDate =
          transaction.createdAt > accumulator.lastOutcomeDate

        if (transactionType && transactionLastDate) {
          accumulator.outcome += transaction.price
          accumulator.total -= transaction.price
          accumulator.lastOutcomeDate = transaction.createdAt
        }
        return accumulator
      },
      { income: 0, outcome: 0, total: 0, lastOutcomeDate: '' },
    )

    // Combina os resultados dos dois resumos
    return {
      income: incomeSummary.income,
      outcome: outcomeSummary.outcome,
      total: incomeSummary.total + outcomeSummary.total,
      lastIncomeDate: incomeSummary.lastIncomeDate,
      lastOutcomeDate: outcomeSummary.lastOutcomeDate,
    }
  }, [transactions])

  return { summary }
}
