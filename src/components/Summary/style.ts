import styled from 'styled-components'

export const SummaryContainer = styled.section`
  position: relative;
  margin: 0 0 4rem;
`
export const SummaryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
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
`
