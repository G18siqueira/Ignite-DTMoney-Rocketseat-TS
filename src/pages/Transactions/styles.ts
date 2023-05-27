import styled from 'styled-components'

export const TransactionsContainer = styled.section`
  position: relative;
`
export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};

    &:first-child {
      width: 50%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
interface PriceHighLightProps {
  colorVariant?: 'income' | 'outcome'
}
export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.colorVariant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
