import { gql, useMutation } from "@apollo/client";
import { createContext, ReactElement, useContext } from "react";
import { useCarrinho } from "../../graphql/sacola/hooks/useCarrinho";
import { useRemoverItem } from "../../graphql/sacola/hooks/useRemoverItem";
import { ICarrinho, IItemCarrinho } from "../../interfaces/ICarrinho";

export interface ICarrinhoContext {
    carrinho?: ICarrinho;
    alterarItem: (item: IItemCarrinho) => void;
    adicionarItem: (item: IItemCarrinho) => void;
    removerItem: (item: IItemCarrinho) => void;
    carregando: boolean
};

export const CarrinhoContext = createContext<ICarrinhoContext>({
    alterarItem: (item: IItemCarrinho) => { },
    adicionarItem: (item: IItemCarrinho) => { },
    removerItem: (item: IItemCarrinho) => { },
    carregando: false
});
const ALTERAR_ITEM = gql`
mutation AdicionarItem($item: ItemCarrinhoInput!) {
    adicionarItem(item: $item)
}
`
interface CarrinhoProviderProps {
    children: ReactElement
}

export const useCarrinhoContext = () => {
    return useContext<ICarrinhoContext>(CarrinhoContext)
}

const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
    const [alterarItem, { loading: loadingAoAlterar }] = useMutation(ALTERAR_ITEM);
    const { data, loading: loadingCarrinho } = useCarrinho()

    const [removerItem, { loading: loadingAoRemover }] = useRemoverItem()

    const aoRemoverItem = (item: IItemCarrinho) => {
        removerItem({
            variables: {
                item: {
                    livroId: item.livro.id,
                    opcaoCompraId: item.opcaoCompra.id,
                    quantidade: item.quantidade
                }
            }
        })
    }

    const aoAlterarItem = (item: IItemCarrinho) => {
        alterarItem({
            variables: {
                item: {
                    livroId: item.livro.id,
                    opcaoCompraId: item.opcaoCompra.id,
                    quantidade: item.quantidade
                }
            },
            refetchQueries: [
                'ObterCarrinho'
            ]
        })
    }
    const carregando = loadingAoAlterar || loadingCarrinho || loadingAoRemover
    return (
        <CarrinhoContext.Provider value={{ carrinho: data?.carrinho, adicionarItem: aoAlterarItem, alterarItem: aoAlterarItem, removerItem: aoRemoverItem, carregando }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export default CarrinhoProvider