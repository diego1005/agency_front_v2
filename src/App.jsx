import {CssBaseline} from '@mui/material'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {SnackbarProvider} from 'notistack'

import AppProvider from './context/AppProvider'
import AppRouter from './router/AppRouter'

const queryClient = new QueryClient()

const App = () => (
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <AppRouter />
      </SnackbarProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </AppProvider>
)

export default App
