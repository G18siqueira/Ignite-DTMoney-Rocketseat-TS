import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Header />
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
