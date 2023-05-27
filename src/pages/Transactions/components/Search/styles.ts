import styled from 'styled-components'

export const SearchFormContainer = styled.section`
  position: relative;
  margin: 0 0 1.5rem;
`
export const SearchFormContent = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background-color: transparent;
    color: ${(props) => props.theme['green-300']};
    padding: 0 2.0625rem;
    font-weight: bold;
    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
    }
  }
`
