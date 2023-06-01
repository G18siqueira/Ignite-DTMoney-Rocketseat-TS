import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { Container } from '../../../../styles/global'
import { TotalContainer, TotalContent } from './styles'

export const Total = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const totalItems = transactions.length

  return (
    <TotalContainer>
      <Container>
        <TotalContent>
          <p>Transações:</p>
          <span>
            {totalItems}
            {totalItems > 1 ? ` itens` : ` item`}
          </span>
        </TotalContent>
      </Container>
    </TotalContainer>
  )
}
