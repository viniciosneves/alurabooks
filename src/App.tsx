import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ABApolloClient from './componentes/ABApolloCliente';
import CarrinhoProvider from './componentes/CarrinhoContextProvider';
import Rotas from './rotas';

const queryClient = new QueryClient()

function App() {
  return (
    <ABApolloClient>
      <QueryClientProvider client={queryClient}>
        <CarrinhoProvider>
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </CarrinhoProvider>
      </QueryClientProvider>
    </ABApolloClient>
  );
}

export default App;
