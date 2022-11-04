import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ReactElement } from 'react';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:9000/graphql',
    connectToDevTools: true
});

type Props = {
    children: ReactElement
}
const ABApolloClient = ({ children }: Props) => {
    return (<ApolloProvider client={client}>
        {children}
    </ApolloProvider>)
}

export default ABApolloClient