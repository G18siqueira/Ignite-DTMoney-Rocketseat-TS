import { FiSearch } from 'react-icons/fi'
import { SearchFormContainer, SearchFormContent } from './styles'
import { Container } from '../../../../styles/global'

export const Search = () => {
  return (
    <SearchFormContainer>
      <Container>
        <SearchFormContent>
          <input type="text" placeholder="Busque por transações" />
          <button type="submit">
            <FiSearch size={20} />
            <span>Buscar</span>
          </button>
        </SearchFormContent>
      </Container>
    </SearchFormContainer>
  )
}
