import { IAutor } from "./IAutor"
import { IOpcaoCompra } from "./IOpcaoCompra"

interface ITag {
    nome: string
}

export interface ILivro {
    id: number
    categoriaId: number
    titulo: string
    slug: string
    descricao: string
    isbn: string
    numeroPaginas: number
    publicacao: string
    imagemCapa: string
    autorId: number
    opcoesCompra: IOpcaoCompra[]
    sobre: string
    autor: IAutor
    tags: ITag[]
}