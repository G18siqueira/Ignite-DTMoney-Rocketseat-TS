import styled from 'styled-components'

/**************************************************/
/**************************************************/
// Section
export const TransactionsContainer = styled.section`
  position: relative;
`
/**************************************************/
/**************************************************/
// Table
export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  tr {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['gray-700']};
    padding: 1.25rem;
    position: relative;

    &:not(:last-child) {
      margin: 0 0 0.75rem;
    }

    @media screen and (min-width: 768px) {
      display: table-row;
      background-color: none;
      padding: 0;
    }
  }

  td {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 10px 0;

    @media screen and (min-width: 768px) {
      padding: 1.25rem 2rem;
      text-align: right;
    }

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      text-align: left;

      @media screen and (min-width: 768px) {
        width: 50%;
      }
    }
    &:nth-child(2) {
      @media screen and (min-width: 768px) {
        min-width: 10.625rem;
      }
    }
    &:last-child {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;

      @media screen and (min-width: 768px) {
        position: initial;
        inset: initial;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
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
/**************************************************/
/**************************************************/
// Group
export const BaseTransactionsTableGroup = styled.div`
  display: flex;
  align-items: center;
`
export const TransactionsTableGroupInfos = styled(BaseTransactionsTableGroup)`
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
  gap: 4rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    color: ${(props) => props.theme['gray-500']};

    @media screen and (min-width: 768px) {
      color: ${(props) => props.theme['gray-100']};
    }

    svg {
      line-height: 0;
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
`
export const TransactionsTableGroupButtons = styled(BaseTransactionsTableGroup)`
  justify-content: flex-end;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`
/**************************************************/
/**************************************************/
// Prince
interface PriceHighLightProps {
  variant?: 'income' | 'outcome'
}
export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
/**************************************************/
/**************************************************/
// Button
interface ButtonHighLightProps {
  variant?: 'edit' | 'delete'
}
export const ButtonHighLight = styled.button<ButtonHighLightProps>`
  color: ${(props) =>
    props.variant === 'edit'
      ? props.theme['green-700']
      : props.theme['red-700']};
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${(props) =>
      props.variant === 'edit'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }
`

/**************************************************/
/**************************************************/
// Pagination
export const PaginationContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0;
`

export const PaginationButtonCurrent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  border: 0;
  border-radius: 6px;
  outline: none;
  cursor: pointer;

  svg {
    polyline {
      stroke: ${(props) => props.theme['green-700']};
    }
    line-height: 0;
  }

  &:disabled {
    svg {
      polyline {
        stroke: ${(props) => props.theme['gray-600']};
      }
      line-height: 0;
    }
  }
`
export const PaginationButtonPageContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 0.5rem;
`
export const PaginationButtonPage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 1rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    background-color: ${(props) => props.theme['green-700']};
  }
`
