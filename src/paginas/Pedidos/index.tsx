import { AbBotao } from "ds-alurabooks"
import './Pedidos.css'
import { formatador } from "../../utils/formatador-moeda"
import { usePedidos } from "../../hooks/queries"

const Pedidos = () => {

    const { data: pedidos } = usePedidos()

    return (<section className="pedidos">
        <h1>Meus pedidos</h1>
        {pedidos?.map(pedido => (<div className="pedido" key={pedido.id}>
            <ul>
                <li>Pedido: <strong>{pedido.id}</strong></li>
                <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                <li>Valor total: <strong>{formatador.format(pedido.total)}</strong></li>
                <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
            </ul>
            <AbBotao texto="Detalhes"/>
        </div>))}
    </section>)
}

export default Pedidos