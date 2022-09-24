import { Link, Outlet } from "react-router-dom"
import TituloPrincipal from "../../componentes/TituloPrincipal"

import './AreaLogada.css'

const AreaLogada = () => {
    return (<>
        <TituloPrincipal texto="Minha conta" />
        <section className="AreaLogada">
            <div className="menu">
                <ul className="navegacao">
                    <li>
                        <Link to="/area-logada/pedidos">Pedidos</Link>
                    </li>
                    <li>
                        <Link to="/area-logada/trocas">Trocas</Link>
                    </li>
                    <li>
                        <Link to="/area-logada/cupons">Cupons</Link>
                    </li>
                    <li>
                        <Link to="/area-logada/dados">Seus dados</Link>
                    </li>
                </ul>
            </div>
            <div className="conteudo">
                <Outlet />
            </div>
        </section>
    </>)
}

export default AreaLogada