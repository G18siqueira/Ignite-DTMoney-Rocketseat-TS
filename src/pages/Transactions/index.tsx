import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { BsCalendar4, BsTicket } from 'react-icons/bs'
import { GrPrevious, GrNext } from 'react-icons/gr'

import { Summary } from '../../components/Summary'
import { Search } from './components/Search'
import { EditTransactionModal } from '../../components/EditTransactionModal'
import {
  TransactionsContext,
  TransactionsType,
} from '../../contexts/TransactionsContext'

import { Container } from '../../styles/global'
import {
  ButtonHighLight,
  PaginationButtonCurrent,
  PaginationButtonPage,
  PaginationButtonPageContainer,
  PaginationContainer,
  PaginationWarning,
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
  TransactionsTableGroupButtons,
  TransactionsTableGroupInfos,
} from './styles'
import { Total } from './components/Total'

interface TransactionsTypes extends TransactionsType {}

interface DeleteTransaction {
  id: string
}

export const Transactions = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionsTypes | null>(null)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.deleteTransaction
    },
  )

  const itemsPerPage = 5
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentTransactions = transactions.slice(
    indexOfFirstItem,
    indexOfLastItem,
  )
  const totalItems = transactions.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleEditTransaction = (transaction: TransactionsTypes) => {
    setSelectedTransaction(transaction)
  }

  const handleDeleteTransaction = (transactionToDelete: DeleteTransaction) => {
    deleteTransaction(transactionToDelete)
  }

  return (
    <main>
      <Summary />

      {totalPages ? <Total /> : ''}

      <Search />

      <TransactionsContainer>
        <Container>
          <TransactionsTable>
            <tbody>
              {currentTransactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td>
                      {transaction.description.charAt(0).toLocaleUpperCase()}
                      {transaction.description.slice(1).toLocaleLowerCase()}
                    </td>
                    <td>
                      <PriceHighLight variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighLight>
                    </td>
                    <td>
                      <TransactionsTableGroupInfos>
                        <span>
                          <BsTicket />
                          {transaction.category.toLocaleLowerCase()}
                        </span>
                        <span>
                          <BsCalendar4 />
                          {dateFormatter.format(
                            new Date(transaction.createdAt),
                          )}
                        </span>
                      </TransactionsTableGroupInfos>
                    </td>
                    <td>
                      <TransactionsTableGroupButtons>
                        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                          <Dialog.Trigger asChild>
                            <ButtonHighLight
                              variant="edit"
                              onClick={() => handleEditTransaction(transaction)}
                            >
                              <AiOutlineEdit size={24} />
                            </ButtonHighLight>
                          </Dialog.Trigger>

                          {selectedTransaction === transaction && (
                            <EditTransactionModal
                              selectedTransaction={selectedTransaction}
                              setIsOpen={setIsOpen}
                            />
                          )}
                        </Dialog.Root>

                        <ButtonHighLight
                          variant="delete"
                          onClick={() => handleDeleteTransaction(transaction)}
                        >
                          <AiOutlineDelete size={24} />
                        </ButtonHighLight>
                      </TransactionsTableGroupButtons>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </TransactionsTable>

          {totalPages ? (
            <PaginationContainer>
              <PaginationButtonCurrent
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <GrPrevious size={16} />
              </PaginationButtonCurrent>

              <PaginationButtonPageContainer>
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => {
                  return (
                    <PaginationButtonPage
                      key={page}
                      onClick={() => handlePageChange(page)}
                      disabled={currentPage === page}
                    >
                      {page}
                    </PaginationButtonPage>
                  )
                })}
              </PaginationButtonPageContainer>

              <PaginationButtonCurrent
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <GrNext size={16} />
              </PaginationButtonCurrent>
            </PaginationContainer>
          ) : (
            <PaginationContainer>
              <PaginationWarning>
                Cadastre uma nova transação!
              </PaginationWarning>
            </PaginationContainer>
          )}
        </Container>
      </TransactionsContainer>
    </main>
  )
}
