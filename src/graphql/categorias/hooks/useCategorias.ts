import { gql, useQuery } from "@apollo/client"
import { ICategoria } from "../../../interfaces/ICategoria"
import { categoriasVar } from "../state"

const OBTER_CATEGORIAS = gql`
  query ObterCategorias {
    categorias {
      id
      nome
      slug
    }
  }
`
export const useCategorias = () => {
    return useQuery<{ categorias: ICategoria[] }>(OBTER_CATEGORIAS, {
        onCompleted(data) {
            categoriasVar(data.categorias)
        },
    })
}