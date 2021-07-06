//Core
import { loader } from 'graphql.macro'
import { useMutation } from '@apollo/react-hooks';

//hooks
import { useForm } from "../useForm";

//mutation
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomerCreator = () => {
    const [_save, { data }] = useMutation(mutationCreateAccount);
    const { formValues, handleChange } = useForm({
        name: "",
        username: "",
        password: "",
    });

    const save = () => {
        _save({
            variables: { account: formValues }
        });
    };

    return { handleChange, save, createdAccount: data && data.createAccount }
}