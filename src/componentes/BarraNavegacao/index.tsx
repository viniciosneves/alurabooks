import { useReactiveVar } from "@apollo/client"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { categoriasVar } from "../../graphql/categorias/state"
import { useCategorias } from "../../graphql/categorias/hooks/useCategorias"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import ModalLoginUsuario from "../ModalLoginUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import MiniCarrinho from "../MiniCarrinho"

// const OBTER_CATEGORIAS = gql`
//   query ObterCategorias {
//     categorias {
//       id
//       nome
//       slug
//     }
//   }
// `

const BarraNavegacao = () => {

    const [modalCadastroAberta, setModalCadastroAberta] = useState(false)
    const [modalLoginAberta, setModalLoginAberta] = useState(false)

    useCategorias()
    const categorias = useReactiveVar(categoriasVar);

    // const { data } = useQuery<{ categorias: ICategoria[] }>(OBTER_CATEGORIAS)

    // const [categorias, setCategorias] = useState<ICategoria[]>([])

    // useEffect(() => {
    //     http.get<ICategoria[]>('categorias')
    //         .then(resposta => {
    //             console.log(resposta.data)
    //             setCategorias(resposta.data)
    //         })
    // }, [])

    const navigate = useNavigate();

    const token = sessionStorage.getItem('token')

    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null)

    const aoEfetuarLogin = () => {
        setModalLoginAberta(false)
        setUsuarioEstaLogado(true)
    }

    const efetuarLogout = () => {
        setUsuarioEstaLogado(false)
        sessionStorage.removeItem('token')
        navigate('/')
    }

    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                    {categorias.map(categoria => (<li key={categoria.id}>
                        <Link to={`/categorias/${categoria.slug}`}>
                            {categoria.nome}
                        </Link>
                    </li>))}
                </ul>
            </li>
        </ul>
        <ul className="acoes">
            {!usuarioEstaLogado && (<>
                <li>
                    <BotaoNavegacao
                        texto="Login"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => setModalLoginAberta(true)}
                    />
                    <ModalLoginUsuario
                        aberta={modalLoginAberta}
                        aoFechar={() => setModalLoginAberta(false)}
                        aoEfetuarLogin={aoEfetuarLogin}
                    />
                </li>
                <li>
                    <BotaoNavegacao
                        texto="Cadastrar-se"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => setModalCadastroAberta(true)}
                    />
                    <ModalCadastroUsuario
                        aberta={modalCadastroAberta}
                        aoFechar={() => setModalCadastroAberta(false)}
                    />
                </li>
            </>)}
            {usuarioEstaLogado &&
                <>
                    <li>
                        <Link to="/minha-conta/pedidos">Minha conta</Link>
                    </li>
                    <li>
                        <MiniCarrinho />
                    </li>
                    <li>
                        <BotaoNavegacao
                            texto="Logout"
                            textoAltSrc="Icone representando um usuário"
                            imagemSrc={usuario}
                            onClick={efetuarLogout}
                        />
                    </li>
                </>
            }
        </ul>
    </nav>)
}

export default BarraNavegacao