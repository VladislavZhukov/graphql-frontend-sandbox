//core
//import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client';

import { setContext } from 'apollo-link-context';

//Auth
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

//GraphQL Server
const uri = 'https://funded-pet-library.moonhighway.com/';
const httpLink = createHttpLink({ uri });

//Cache inicialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
    ssrMode: true,
    link: authLink.concat(httpLink),
    cache: cache,
});