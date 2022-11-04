import { useParams } from "react-router-dom"
import ListaLivros from "../../componentes/ListaLivros"
import Loader from "../../componentes/Loader"
import TituloPrincipal from "../../componentes/TituloPrincipal"
import { useCategoriaPorSlug } from "../../graphql/categorias/hooks/useCategoriaPorSlug"

const Categoria = () => {

    const params = useParams()
    // const { data: categoria, isLoading } = useQuery(['categoriaPorSlug', params.slug], () => obterCategoriaPorSlug(params.slug || ''))
    // const categorias = useReactiveVar(categoriasVar);
    // const categoria = categorias.find(cat => cat.slug === params.slug)
    
    const categoria = useCategoriaPorSlug(params.slug!)

    if (!categoria) {
        return <Loader />
    }

    return (<section>
        <TituloPrincipal texto={categoria.nome} />
        <ListaLivros categoria={categoria}/>
    </section>)
}

export default Categoria