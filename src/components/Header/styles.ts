import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 7.3125rem;

    @media screen and (min-width: 768px) {
      width: 10.75rem;
    }
  }
`

export const NewTransactionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.375rem;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  padding: 0 1.25rem;
  font-weight: bold;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  @media screen and (min-width: 768px) {
    height: 3.125rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
