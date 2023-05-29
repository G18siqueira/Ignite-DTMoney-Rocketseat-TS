import { useContext } from 'react'
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
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { NewTransactionModal } from '../../components/NewTransactionModal'

import * as Dialog from '@radix-ui/react-dialog'

interface DeleteTransaction {
  id: number
}

export const Transactions = () => {
  const { transactions, deleteTransaction } = useContext(TransactionsContext)

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
                        <Dialog.Trigger>
                          <ButtonHighLight variant="edit">
                            <AiOutlineEdit size={24} />
                          </ButtonHighLight>
                        </Dialog.Trigger>

                        <NewTransactionModal />
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
