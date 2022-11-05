import { AbInputQuantidade } from "ds-alurabooks"
import { useState } from "react"
import { IItemCarrinho } from "../../../interfaces/ICarrinho"
import { formatador } from "../../../utils/formatador-moeda"

import lixeira from './assets/lixeira.png'

import './ItemCarrinho.css'

interface ItemCarrinhoProps {
    item: IItemCarrinho
    aoAlterarItem?: (item: IItemCarrinho) => void
    aoRemoverItem?: (item: IItemCarrinho) => void
}

const ItemCarrinho = ({ item, aoAlterarItem: aoQuantidadeAlterada, aoRemoverItem } : ItemCarrinhoProps) => {
    const [quantidade, setQuantidade] = useState(item.quantidade)
    
    const aoAlterar = (novaQuantidade: number) => {
        setQuantidade(novaQuantidade)
        if (aoQuantidadeAlterada) {
            aoQuantidadeAlterada({
                ...item,
                quantidade: novaQuantidade
            })
        }
    } 

    const aoRemover = () => {
        if (aoRemoverItem) {
            aoRemoverItem(item)
        }
    }
    
    return (
        <div className="item-carrinho">
            <figure>
                <img src={item.livro.imagemCapa} alt={item.livro.descricao} />
            </figure>
            <div className="detalhes">
                <ul>
                    <li className="titulo">{item.livro.titulo}</li>
                    <li className="descricao">{item.livro.descricao}</li>
                    <li className="autor">Por: {item.livro.autor.nome}</li>
                </ul>
            </div>
            <div>
                <ul className="preco">
                    <li className="label">
                        <strong>Preço:</strong>
                    </li>
                    <li className="valor">
                        {formatador.format(item.opcaoCompra.preco)}
                    </li>
                </ul>
            </div>
            <div className="quantidade">
                <AbInputQuantidade value={quantidade} onChange={aoAlterar}/>
            </div>
            <div>
                <button className="btn-excluir" onClick={aoRemover}>
                    <img src={lixeira} alt="Ícone de uma lixeira" />
                </button>
            </div>
        </div>
    )
}

export default ItemCarrinho