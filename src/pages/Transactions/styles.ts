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
      width: 5%;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      padding: 1.25rem 0;
    }
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
  }
`
interface PriceHighLightProps {
  variant?: 'income' | 'outcome'
}
export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

interface ButtonHighLightProps {
  variant?: 'edit' | 'delete'
}
export const ButtonHighLight = styled.button<ButtonHighLightProps>`
  color: ${(props) =>
    props.variant === 'edit'
      ? props.theme['green-700']
      : props.theme['red-700']};
  transition: all 0.1s ease-in-out;

  &:hover,
  &:focus {
    color: ${(props) =>
      props.variant === 'edit'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }
`
