import { AbBotao } from "ds-alurabooks"
import { Link } from "react-router-dom"
import TituloPrincipal from "../../componentes/TituloPrincipal"
import { formatador } from "../../utils/formatador-moeda"

import './Carrinho.css'
import CarrinhoLoader from "../../componentes/LoaderPaginaInteira"
import ItemCarrinho from "./ItemCarrinho"
import { useCarrinhoContext } from "../../componentes/CarrinhoContextProvider"

const Carrinho = () => {
      
    const { carrinho, carregando, alterarItem, removerItem } = useCarrinhoContext()
    
    return (<section className="pagina-carrinho">
        {carregando && <CarrinhoLoader />}
        <TituloPrincipal texto="Minha sacola" />
        <div className="conteudo">
            <h4>Itens selecionados</h4>
            <div className="itens">
                {carrinho?.itens.map((item, index) => 
                    <ItemCarrinho key={index} item={item} aoRemoverItem={removerItem} aoAlterarItem={alterarItem} />)}  
            </div>
            <div>
                <Link to='/'>Continuar comprando</Link>
            </div>
            <footer>
                <ul>
                    <li>Total da compra</li>
                    <li><strong>{formatador.format(carrinho?.total || 0)}</strong></li>
                    <li>
                        <AbBotao texto="Finalizar compra" />
                    </li>
                </ul>
            </footer>
        </div>
    </section>)
}

export default Carrinho