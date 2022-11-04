import { useReactiveVar } from "@apollo/client"
import { AbCampoTexto } from "ds-alurabooks"
import { useEffect } from "react"
import { useLivros } from "../../graphql/livros/hooks/useLivros"
import { filtroLivrosVar, livrosVar } from "../../graphql/livros/state"
import { ICategoria } from "../../interfaces/ICategoria"
import CardLivro from "../CardLivro"

import './ListaLivros.css'

// const OBTER_LIVROS = gql`
//     query ObterLivros($categoriaId: Int, $titulo: String) {
//         livros(categoriaId: $categoriaId, titulo: $titulo) {
//             id
//             imagemCapa
//             descricao
//             titulo
//             slug
//             opcoesCompra {
//                 preco
//             }
//         }
//     }
// `
interface ListaLivrosProps {
    categoria: ICategoria
}

const ListaLivros = ({ categoria } : ListaLivrosProps) => {

    // const [busca , setBusca] = useState('')
    const filtro = useReactiveVar(filtroLivrosVar)
    useEffect(() => {
        filtroLivrosVar({
            ...filtroLivrosVar(),
            categoriaId: categoria?.id
        })
    }, [categoria])
    // const { data, refetch } = useQuery< { livros: ILivro[] } >(OBTER_LIVROS, {
    //     variables: {
    //         categoriaId: filtro?.categoriaId
    //     }
    // })

    // const buscar = () => {
    //     refetch({
    //         categoriaId: filtro?.categoriaId,
    //         titulo: filtro?.titulo
    //     })
    // }
    useLivros()
    const livros = useReactiveVar(livrosVar);

    // const { data: produtos } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterProdutosDaCategoria(categoria))
    return <section>
        <div className="busca">
            <AbCampoTexto value={filtro.titulo} onChange={valor => filtroLivrosVar({ ...filtroLivrosVar(), titulo: valor })}/>
            {/* <div className="botaoContainer">
                <AbBotao texto="Buscar" onClick={buscar}/>
            </div> */}
        </div>
        <div className="livros">
            {livros?.map(livro => <CardLivro livro={livro} key={livro.id} />)}
        </div>
    </section>
}

export default ListaLivros