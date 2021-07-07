//Core
import { loader } from 'graphql.macro'
import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';

//mutation
const mutationCheckIn = loader('./gql/mutationCheckIn.graphql');


export const useCheckIn = () => {
    const [_checkIn, { data, error }] = useMutation(mutationCheckIn);
    const [errorUseCheckIn, setError] = useState(false);



    const checkIn = (id) => {
        (async () => {
            try {
                await _checkIn({
                    variables: {
                        id
                    }
                })
            } catch (e) {
                setError(e.message);
            }
        })()
    };

    const pet = data && data.checkIn.pet;

    return {
        checkIn,
        pet,
        error,
        errorUseCheckIn
    }

};