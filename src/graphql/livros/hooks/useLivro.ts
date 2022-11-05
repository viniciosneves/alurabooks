import { gql, useQuery } from "@apollo/client"
import { ILivro } from "../../../interfaces/ILivro"

export const OBTER_LIVRO = gql`
    query ObterLivro($slug: String!) {
        livro(slug: $slug) {
            id
            imagemCapa
            descricao
            titulo
            slug
            sobre
            autor {
                id
                nome
                sobre
            }
            opcoesCompra {
                id
                titulo
                formatos
                preco
            }
            tags {
                nome
            }
        }
    }
`

export const useLivro = (slug: string) => {
    return useQuery<{ livro: ILivro }>(OBTER_LIVRO, {
        variables: {
            slug
        }
    })
}