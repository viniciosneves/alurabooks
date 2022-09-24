import { useQuery } from "@tanstack/react-query"
import { AbBotao } from "ds-alurabooks"
import { Link } from "react-router-dom"
import { obterLivros } from "../../http"
import { ICategoria } from "../../interfaces/ICategoria"
import { ILivro } from "../../interfaces/ILivro"
import { formatador } from "../../utils/formatador-moeda"
import Loader from "../Loader"

import './ListaLivros.css'

interface ListaLivrosProps {
    categoria: ICategoria
}

const obterValorMinimo = (livro: ILivro) => {
    return Math.min(...livro.opcoesCompra.map(op => op.preco))
}

const ListaLivros = ({ categoria } : ListaLivrosProps) => {

    const { data: livros, isLoading } = useQuery(['livros', categoria.id], () => obterLivros(categoria.id))

    if (isLoading) {
        return <Loader />
    }
    
    return (<section className="livros">
        {livros?.map(livro => (
            <div className="livro" key={livro.id}>
                <img src={livro.imagemCapa} alt={livro.descricao} />
                <ul>
                    <li>
                        <strong>{livro.titulo}</strong>
                    </li>
                    <li>
                        A partir de: <strong>{formatador.format(obterValorMinimo(livro))}</strong>
                    </li>
                    <li className="link-container">
                        <Link to={`/livro/${livro.slug}`}>
                            <AbBotao isBlock texto="Comprar" />
                        </Link>
                    </li>
                </ul>
            </div>
        ))}
    </section>)
}

export default ListaLivros