import { gql, useQuery, useReactiveVar } from "@apollo/client"
import { ILivro } from "../../../interfaces/ILivro"
import { filtroLivrosVar, livrosVar } from "../state"

const OBTER_LIVROS = gql`
    query ObterLivros($categoriaId: Int, $titulo: String) {
        livros(categoriaId: $categoriaId, titulo: $titulo) {
            id
            imagemCapa
            descricao
            titulo
            slug
            opcoesCompra {
                preco
            }
        }
    }
`

export const useLivros = () => {
    const filtro = useReactiveVar(filtroLivrosVar)
    return useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
        variables: {
            ...filtro
        },
        onCompleted(data) {
            livrosVar(data.livros)
        },
        skip: !filtro.categoriaId
    })
}