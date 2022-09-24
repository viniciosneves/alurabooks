import { useQuery } from "@tanstack/react-query"
import { AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import Banner from "../../componentes/Banner"
import LivrosDestaque from "../../componentes/LivrosDestaque"
import Loader from "../../componentes/Loader"
import Newsletter from "../../componentes/Newsletter"
import TagsCategorias from "../../componentes/TagsCategorias"
import Titulo from "../../componentes/Titulo"
import { obterLivrosDestaque } from "../../http"

import './Home.css'

const Home = () => {
    const [busca, setBusca] = useState("")

    const { data: destaques, isLoading: loadingLancamentos } = useQuery(['destaques'], () => obterLivrosDestaque('lancamentos'))
    const { data: maisVendidos, isLoading: loadingMaisVendidos } = useQuery(['maisVendidos'], () => obterLivrosDestaque('mais-vendidos'))
    if (loadingLancamentos || loadingMaisVendidos) {
        return <Loader />
    }
    return (<section className="home">
        <Banner subtitulo="Encontre em nossa estante o que precisa para seu desenvolvimento!" titulo="Já sabe por onde começar?">
            <form className="buscar">
                <AbCampoTexto 
                    placeholder="Qual será sua próxima leitura?"
                    value={busca}
                    onChange={setBusca}
                    darkmode={true}
                    placeholderAlign="center"
                />
            </form>
        </Banner>
        <Titulo texto="ÚLTIMOS LANÇAMENTOS"/>
        <LivrosDestaque livros={destaques!}/>
        <Titulo texto="MAIS VENDIDOS"/>
        <LivrosDestaque livros={maisVendidos!}/>
        <TagsCategorias />
        <Newsletter />
    </section>)
}

export default Home