import { Container } from '../../styles/global'
import {
  SummaryContent,
  SummaryContainer,
  SummaryCard,
  SummaryWarning,
} from './style'
import {
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsCurrencyDollar,
  BsHandIndex,
} from 'react-icons/bs'
import { dateFormatter2, priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export const Summary = () => {
  const { summary } = useSummary()

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
            <span>
              {summary.lastDateIncome
                ? `Última entrada em ${dateFormatter2.format(
                    new Date(summary.lastDateIncome),
                  )}`
                : ''}
            </span>
          </SummaryCard>

          <SummaryCard>
            <header>
              <span>Saídas</span>
              <BsArrowDownCircle size={32} color="#f75a68" />
            </header>
            <p>
              <strong>{priceFormatter.format(summary.outcome)}</strong>
            </p>
            <span>
              {summary.lastDateOutcome
                ? `Última saída em ${dateFormatter2.format(
                    new Date(summary.lastDateOutcome),
                  )}`
                : ''}
            </span>
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
        <SummaryWarning>
          Arraste para o lado
          <BsHandIndex />
        </SummaryWarning>
      </Container>
    </SummaryContainer>
  )
}
