import { Route, Routes } from "react-router-dom"
import AreaLogada from "../paginas/AreaLogada"
import Carrinho from "../paginas/Carrinho"
import Categoria from "../paginas/Categoria"
import Home from "../paginas/Home"
import Livro from "../paginas/Livro"
import PaginaBase from "../paginas/PaginaBase"
import Pedidos from "../paginas/Pedidos"


const Rotas = () => {
  return (<Routes>
    <Route path='/' element={<PaginaBase />}>
      <Route path='/' element={<Home />} />
      <Route path='/minha-conta' element={<AreaLogada />}>
        <Route path="pedidos" element={<Pedidos />} />
      </Route>
      <Route path="/categorias/:slug" element={<Categoria />}/>
      <Route path="/livro/:slug" element={<Livro />} />
      <Route path="/minha-sacola" element={<Carrinho />} />
    </Route>
  </Routes>)
}

export default Rotas