import { SearchFormContainer, SearchFormContent } from './styles'
import { Container } from '../../../../styles/global'
import { useForm } from 'react-hook-form'
import { FiSearch } from 'react-icons/fi'
import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <SearchFormContainer>
      <Container>
        <SearchFormContent onSubmit={handleSubmit(handleSearchTransactions)}>
          <input
            type="text"
            placeholder="Busque por transações"
            {...register('query')}
          />
          <button type="submit" disabled={isSubmitting}>
            <FiSearch size={20} />
            <span>Buscar</span>
          </button>
        </SearchFormContent>
      </Container>
    </SearchFormContainer>
  )
}
