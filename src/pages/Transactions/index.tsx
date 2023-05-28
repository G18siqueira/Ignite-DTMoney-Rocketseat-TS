import { Summary } from '../../components/Summary'
import { Container } from '../../styles/global'
import { Search } from './components/Search'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export const Transactions = () => {
  return (
    <main>
      <Summary />

      <Search />

      <TransactionsContainer>
        <Container>
          <TransactionsTable>
            <tbody>
              <tr>
                <td width="50%">Desenvolvimento de site</td>
                <td>
                  <PriceHighLight colorVariant="income">
                    R$ 12.000,00
                  </PriceHighLight>
                </td>
                <td>Venda</td>
                <td>13/04/2022</td>
              </tr>
              <tr>
                <td width="50%">Burger King</td>
                <td>
                  <PriceHighLight colorVariant="outcome">
                    -R$ 59,00
                  </PriceHighLight>
                </td>
                <td>Alimentação</td>
                <td>27/04/2022</td>
              </tr>
            </tbody>
          </TransactionsTable>
        </Container>
      </TransactionsContainer>
    </main>
  )
}
