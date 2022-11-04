import { makeVar } from "@apollo/client";
import { ILivro } from "../../interfaces/ILivro";

interface FiltroLivros {
    categoriaId?: number
    titulo: string
}

export const filtroLivrosVar = makeVar<FiltroLivros>({
    titulo: ""
})
export const livrosVar = makeVar<ILivro[]>([])