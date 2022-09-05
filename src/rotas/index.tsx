import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import PaginaBase from "../paginas/PaginaBase"


const Rotas = () => {
    return (<Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>)
}

export default Rotas