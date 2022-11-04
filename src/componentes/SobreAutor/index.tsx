import { useQuery } from "@tanstack/react-query"
import { obterAutor } from "../../http"
import { IAutor } from "../../interfaces/IAutor"
import BlocoSobre from "../BlocoSobre"

interface SobreAutorProps {
    autor: IAutor
}

const SobreAutor = ({ autor } : SobreAutorProps) => {
    return <BlocoSobre titulo="Sobre o Autor" corpo={autor?.sobre} />
}

export default SobreAutor