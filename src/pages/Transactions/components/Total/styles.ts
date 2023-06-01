import styled from 'styled-components'

export const TotalContainer = styled.section`
  position: relative;
`
export const TotalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3125rem;
  margin: 0 0 0.75rem;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }

  p {
    color: ${(props) => props.theme['gray-300']};
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme['gray-500']};
    font-size: 1rem;
  }
`
