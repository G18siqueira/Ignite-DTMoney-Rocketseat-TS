import { useContext } from 'react'
import { Summary } from '../../components/Summary'
import { Container } from '../../styles/global'
import { Search } from './components/Search'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

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
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighLight colorVariant={transaction.type}>
                        {transaction.price}
                      </PriceHighLight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{transaction.createdAt}</td>
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
