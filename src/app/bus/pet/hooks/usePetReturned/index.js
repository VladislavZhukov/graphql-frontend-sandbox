//Core
import { loader } from 'graphql.macro';
import { useSubscription } from '@apollo/react-hooks';

//Subscription
const subscriptionPetReturned = loader('./gql/subscriptionPetReturned.graphql');

export const usePetReturned = () => {
    const { loading, error, data } = useSubscription(subscriptionPetReturned);

    let pet = data ? data.petReturned.pet : null;

    return { loading, error, pet }
};