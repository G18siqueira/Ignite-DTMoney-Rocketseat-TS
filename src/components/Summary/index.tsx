import { Container } from '../../styles/global'
import { SummaryContent, SummaryContainer, SummaryCard } from './style'
import {
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsCurrencyDollar,
} from 'react-icons/bs'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export const Summary = () => {
  const summary = useSummary()

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
              <strong>{priceFormatter.format(summary.income)}</strong>
            </p>
          </SummaryCard>

          <SummaryCard>
            <header>
              <span>Saídas</span>
              <BsArrowDownCircle size={32} color="#f75a68" />
            </header>
            <p>
              <strong>{priceFormatter.format(summary.outcome)}</strong>
            </p>
          </SummaryCard>

          <SummaryCard bgVariant="green">
            <header>
              <span>Total</span>
              <BsCurrencyDollar size={32} color="#fff" />
            </header>
            <p>
              <strong>{priceFormatter.format(summary.total)}</strong>
            </p>
          </SummaryCard>
        </SummaryContent>
      </Container>
    </SummaryContainer>
  )
}
