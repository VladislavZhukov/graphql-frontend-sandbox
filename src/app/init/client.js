//core
//import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client';

//GraphQL Server
const uri = 'https://funded-pet-library.moonhighway.com/';
const link = createHttpLink({ uri });

//Cache inicialization
const cache = new InMemoryCache();

export const client = new ApolloClient({
    ssrMode: true,
    link: link,
    cache: cache,
});