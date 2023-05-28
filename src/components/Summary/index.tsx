import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { Container } from '../../styles/global'
import { SummaryContent, SummaryContainer, SummaryCard } from './style'
import {
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsCurrencyDollar,
} from 'react-icons/bs'

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <SummaryContainer>
      <Container>
        <SummaryContent>
          <SummaryCard>
            <header>
              <span>Entradas</span>
              <BsArrowUpCircle size={32} color="#00b37e" />
            </header>
            <p>
              <strong>R$ 17.400,00</strong>
            </p>
          </SummaryCard>

          <SummaryCard>
            <header>
              <span>Saídas</span>
              <BsArrowDownCircle size={32} color="#f75a68" />
            </header>
            <p>
              <strong>R$ 17.400,00</strong>
            </p>
          </SummaryCard>

          <SummaryCard bgVariant="green">
            <header>
              <span>Total</span>
              <BsCurrencyDollar size={32} color="#fff" />
            </header>
            <p>
              <strong>R$ 17.400,00</strong>
            </p>
          </SummaryCard>
        </SummaryContent>
      </Container>
    </SummaryContainer>
  )
}
