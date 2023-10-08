import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RecoilRoot>
        <Header />
        <Outlet />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
