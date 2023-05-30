import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { Summary } from '../../components/Summary'
import { Container } from '../../styles/global'
import { Search } from './components/Search'
import {
  ButtonHighLight,
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import {
  TransactionsContext,
  TransactionsType,
} from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { EditTransactionModal } from '../../components/EditTransactionModal'

interface TransactionsTypes extends TransactionsType {}

interface DeleteTransaction {
  id: number
}

export const Transactions = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.deleteTransaction
    },
  )

  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionsTypes | null>(null)

  const handleEditTransaction = (transaction: TransactionsTypes) => {
    setSelectedTransaction(transaction)
  }

  const handleDeleteTransaction = (transactionToDelete: DeleteTransaction) => {
    deleteTransaction(transactionToDelete)
  }

  return (
    <main>
      <Summary />
      <Search />

      <TransactionsContainer>
        <Container>
          <TransactionsTable>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td>{transaction.description}</td>
                    <td>
                      <PriceHighLight variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighLight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                    <td>
                      <Dialog.Root>
                        <Dialog.Trigger asChild>
                          <ButtonHighLight
                            variant="edit"
                            onClick={() => handleEditTransaction(transaction)}
                          >
                            <AiOutlineEdit size={24} />
                          </ButtonHighLight>
                        </Dialog.Trigger>

                        <EditTransactionModal
                          selectedTransaction={selectedTransaction}
                        />
                      </Dialog.Root>
                    </td>
                    <td>
                      <ButtonHighLight
                        variant="delete"
                        onClick={() => handleDeleteTransaction(transaction)}
                      >
                        <AiOutlineDelete size={24} />
                      </ButtonHighLight>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </TransactionsTable>
        </Container>
      </TransactionsContainer>
    </main>
  )
}
