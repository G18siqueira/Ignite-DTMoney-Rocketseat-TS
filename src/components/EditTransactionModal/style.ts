import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  inset: 0; //o mesmo que top,left,right e bottom: 0
  position: fixed;
`
export const Content = styled(Dialog.Content)`
  min-width: 100%;
  background-color: ${(props) => props.theme['gray-800']};
  padding: 2.5rem 1.5rem;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  position: fixed;
  left: 0;
  bottom: 0;

  @media screen and (min-width: 768px) {
    min-width: 32rem;
    padding: 2.5rem 3rem;
    border-radius: 6px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
export const CloseButton = styled(Dialog.Close)`
  background-color: transparent;
  color: ${(props) => props.theme.white};
  position: absolute;
  line-height: 0;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  cursor: pointer;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0 0;

  input {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    border: 0;
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button[type='submit'] {
    height: 3.625rem;
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    padding: 0 1.25rem;
    margin: 1.5rem 0 0;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:not(:disabled)hover {
      background-color: ${(props) => props.theme['green-700']};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
interface TransactionTypeButtonProps {
  colorvariant: 'income' | 'outcome'
}
export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  box-shadow: none !important;

  &[data-state='checked'] {
    background-color: ${(props) =>
      props.colorvariant === 'income'
        ? props.theme['green-700']
        : props.theme['red-700']};
    color: ${(props) => props.theme.white};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state='unchecked'] {
    &:hover {
      background-color: ${(props) => props.theme['gray-600']};
    }
  }

  svg {
    color: ${(props) =>
      props.colorvariant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
    transition: all 0.1s ease-in-out;
  }
`
