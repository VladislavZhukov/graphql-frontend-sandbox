//Core
import { loader } from 'graphql.macro'
import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';

//hooks
import { useForm } from "../useForm";

//Mutation
const mutationLogIn = loader('./gql/mutationLogIn.graphql');

export const useCustomerAuth = () => {
    const [_logIn, { data }] = useMutation(mutationLogIn);
    const { formValues, handleChange } = useForm({
        username: "",
        password: "",
    });

    const authorizedCustomer = data && data.logIn;
    const token = authorizedCustomer && authorizedCustomer.token;

    if (token) {
        localStorage.setItem('token', token);
    }

    const logIn = () => {
        _logIn({
            variables: formValues
        });
    };

    return {
        handleChange,
        logIn,
        authorizedCustomer
    }
}