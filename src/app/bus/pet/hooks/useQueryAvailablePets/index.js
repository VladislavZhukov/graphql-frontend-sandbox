//Core
import { useQuery } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'

//queries
const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');

export const useQueryAvailablePets = () => {
    //const type = "temp variables";
    return useQuery(queryAvailablePets, {
        // variables: { type },
        // skip: !type,

        //pollInterval: 500,
        
    });
};