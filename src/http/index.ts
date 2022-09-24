import axios from "axios";
import { IAutor } from "../interfaces/IAutor";
import { ICategoria } from "../interfaces/ICategoria";
import { ILivro } from "../interfaces/ILivro";
import { IPedido } from "../interfaces/IPedido";

const http = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
})

http.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = sessionStorage.getItem('token')
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  // Do something with request error
  console.log('Erro no interceptor do axios')
  return Promise.reject(error);
});

export default http

export const obterPedidos = async () => {
  const resposta = await http.get<IPedido[]>('pedidos')
  return resposta.data
}

export const obterCategorias = async () => {
  const resposta = await http.get<ICategoria[]>('categorias')
  return resposta.data
}

export const obterLivros = async (categoriaId: number) => {
  const resposta = await http.get<ILivro[]>('livros', {
    params: {
      categoria: categoriaId
    }
  })
  return resposta.data
}

export const obterAutor = async (autorId: number) => {
  const resposta = await http.get<IAutor>(`autores/${autorId}`)
  return resposta.data
}

export const obterCategoria = async (slug: string) => {
  const resposta = await http.get<ICategoria[]>('categorias', {
    params: {
      slug
    }
  })
  return resposta.data[0]
}

export const obterLivro = async (slug: string) => {
  const resposta = await http.get<ILivro[]>('livros', {
    params: {
      slug
    }
  })
  return resposta.data[0]
}

export const obterLivrosDestaque = async (tipo: string) => {
  const resposta = await http.get<ILivro[]>(`public/${tipo}`)
  return resposta.data
}
