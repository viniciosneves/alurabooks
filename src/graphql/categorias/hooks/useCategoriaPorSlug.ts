import { useReactiveVar } from "@apollo/client";
import { categoriasVar } from "../state";

export const useCategoriaPorSlug = (slug:string) => {
    const categorias = useReactiveVar(categoriasVar);
    const categoria = categorias.find(cat => cat.slug === slug)
    return categoria;
}