import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.125rem;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  padding: 0 1.25rem;
  font-weight: bold;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
