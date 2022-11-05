import { gql, useQuery } from "@apollo/client"
import { ICarrinho } from "../../../interfaces/ICarrinho"

const OBTER_CARRINHO = gql`
  query ObterCarrinho {
    carrinho {
      total
      itens {
        opcaoCompra {
          id
          preco
        }
        livro {
          id
          titulo
          imagemCapa
          descricao
          autor {
            nome
          }
        }
        quantidade
      }
    }
  }
`

export const useCarrinho = () => {
    return useQuery<{ carrinho: ICarrinho }>(OBTER_CARRINHO)
}