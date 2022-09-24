import { useQuery } from "@tanstack/react-query"
import { obterPedidos } from "../http"

export const usePedidos = () => {
    return useQuery(['pedidos'], obterPedidos)
}