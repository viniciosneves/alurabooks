import { AbBotao, AbGrupoOpcao, AbGrupoOpcoes, AbInputQuantidade, AbTag } from "ds-alurabooks"
import { useState } from "react"
import { useParams } from "react-router-dom"
import BlocoSobre from "../../componentes/BlocoSobre"
import { useCarrinhoContext } from "../../componentes/CarrinhoContextProvider"
import Loader from "../../componentes/Loader"
import LoaderPaginaInteira from "../../componentes/LoaderPaginaInteira"
import TituloPrincipal from "../../componentes/TituloPrincipal"
import { useLivro } from "../../graphql/livros/hooks/useLivro"
import { formatador } from "../../utils/formatador-moeda"

import './Livro.css'


const Livro = () => {

    const params = useParams()

    const [opcao, setOpcao] = useState<AbGrupoOpcao>()
    const [quantidade, setQuantidade] = useState(1)


    const { data, loading, error } = useLivro(params.slug!);
    const { carregando, adicionarItem } = useCarrinhoContext()

    if (error) {
        console.log('Alguma coisa deu errada')
        console.log(error)
        return <h1>Ops! Algum erro inesperado aconteceu</h1>
    }
    
    if ( !data || !data.livro === null) {
        return <h1>Livro não encontrado!</h1>
    }
    const { livro } = data;

    if (loading || !livro) {
        return <Loader />
    }

    const opcoes: AbGrupoOpcao[] = livro.opcoesCompra ? livro.opcoesCompra.map(opcao => ({
        id: opcao.id,
        corpo: formatador.format(opcao.preco),
        titulo: opcao.titulo,
        rodape: opcao.formatos ? opcao.formatos.join(',') : ''
    }))
        : []

    const adicionarAoCarrinho = () => {
        const opcaoCompra = livro.opcoesCompra.find(op => op.id === opcao?.id)
        if (!opcao || !opcaoCompra) {
            return
        }
        adicionarItem({
            livro,
            opcaoCompra,
            quantidade
        })
    }

    return (
        <section className="livro-detalhe">
            {carregando && <LoaderPaginaInteira />}
            <TituloPrincipal texto="Detalhes do Livro" />
            <div className="">
                <div className="container">
                    <figure>
                        <img src={livro.imagemCapa} alt={livro.descricao} />
                    </figure>
                    <div className="detalhes">
                        <h2>{livro.titulo}</h2>
                        <p>{livro.descricao}</p>
                        <h3>Selecione o formato do seu livro:</h3>
                        <div className="opcoes">
                            <AbGrupoOpcoes
                                opcoes={opcoes}
                                onChange={setOpcao}
                                valorPadrao={opcao}
                            />
                        </div>
                        <p><strong>*Você terá acesso às futuras atualizações do livro.</strong></p>
                        <footer>
                            <div className="qtdContainer">
                                <AbInputQuantidade value={quantidade} onChange={setQuantidade}/>
                            </div>
                            <div>
                                <AbBotao texto="Comprar" onClick={adicionarAoCarrinho}/>
                            </div>
                        </footer>
                    </div>
                </div>
                <div>
                    <BlocoSobre titulo="Sobre o Autor" corpo={livro.autor.sobre} />
                    <BlocoSobre titulo="Sobre o Livro" corpo={livro.sobre} />
                    <div className="tags">
                        {livro?.tags?.map(tag => <AbTag contexto="secundario" key={tag.nome} texto={tag.nome}/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Livro