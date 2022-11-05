import { gql, useMutation } from "@apollo/client";

const REMOVER_ITEM = gql`
mutation RemoverItem($item: ItemCarrinhoInput!) {
    removerItem(item: $item)
}
`

export const useRemoverItem = () => {
    return useMutation(REMOVER_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ]
    });
}
