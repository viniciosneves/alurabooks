import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ABApolloClient from './componentes/ABApolloCliente';
import Rotas from './rotas';

const queryClient = new QueryClient()

function App() {
  return (
    <ABApolloClient>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </QueryClientProvider>
    </ABApolloClient>
  );
}

export default App;
