import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  inset: 0; //o mesmo que top,left,right e bottom: 0
  position: fixed;
`
export const Content = styled(Dialog.Overlay)`
  min-width: 32rem;
  background-color: ${(props) => props.theme['gray-800']};
  padding: 2.5rem 3rem;
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
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

      &:hover {
        background-color: ${(props) => props.theme['green-700']};
      }
    }
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
