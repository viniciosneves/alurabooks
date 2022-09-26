import { ICategoria } from "../../interfaces/ICategoria"
import { useQuery } from '@tanstack/react-query'
import { obterProdutosDaCategoria } from "../../http"
import CardLivro from "../CardLivro"

import './ListaLivros.css'

interface ListaLivrosProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {

    const { data: produtos } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterProdutosDaCategoria(categoria))
    return <section className="livros">
        {produtos?.map(livro => <CardLivro livro={livro} key={livro.id} />)}
    </section>
}

export default ListaLivros