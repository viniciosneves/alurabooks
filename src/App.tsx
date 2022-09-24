import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Rotas from './rotas';

const queryClient = new QueryClient()

function App() {
  return (<BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Rotas />
    </QueryClientProvider>
  </BrowserRouter>
  );
}

export default App;
