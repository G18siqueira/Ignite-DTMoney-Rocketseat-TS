import styled from 'styled-components'

export const SummaryContainer = styled.section`
  position: relative;
  margin: 0 0 4rem;
`
export const SummaryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 20.5rem);
  gap: 1rem;
  margin: -5rem -1.5rem 0;
  overflow-x: auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    overflow-x: initial;
    margin: -5rem 0 0;
  }
`

interface SummaryCardProps {
  bgVariant?: 'green'
}
export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) =>
    props.bgVariant === 'green'
      ? props.theme['green-700']
      : props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  &:first-of-type {
    margin: 0 0 0 1.5rem;
  }
  &:last-of-type {
    margin: 0 1.5rem 0 0;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
    margin: 0 0 1rem;
  }

  p {
    font-size: 2rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};
  }
`
