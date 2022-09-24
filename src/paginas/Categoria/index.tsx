import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import ListaLivros from "../../componentes/ListaLivros"
import Loader from "../../componentes/Loader"
import TituloPrincipal from "../../componentes/TituloPrincipal"
import { obterCategoria } from "../../http"

const Categorias = () => {
    const params = useParams()

    const { data: categoria, isLoading } = useQuery(['categoria', params.slug], () => obterCategoria(params.slug || ''))
    if (isLoading) {
        return <Loader />
    }
    return (<section>
        <TituloPrincipal texto={categoria?.nome ?? ''}/>
        {categoria && <ListaLivros categoria={categoria}/>}
    </section>)
}

export default Categorias