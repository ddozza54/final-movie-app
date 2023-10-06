import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Header />
        <Outlet />
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export default App
