import './TituloPrincipal.css'

interface TituloPrincipalProps {
    texto: string
}
const TituloPrincipal = ({ texto } : TituloPrincipalProps) => {

    return (<h1 className="TituloPrincipal">{texto}</h1>)

}

export default TituloPrincipal