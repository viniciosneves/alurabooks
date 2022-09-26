import { Route, Routes } from "react-router-dom"
import AreaLogada from "../paginas/AreaLogada"
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
    </Route>
  </Routes>)
}

export default Rotas