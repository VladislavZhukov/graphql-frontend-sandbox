import { useState } from 'react';

export const useForm = (initialValues) => {
    const [formValues, setForm] = useState(initialValues);

    const handleChange = (event) => {
        event.persist();
        setForm((prevValues) => ({
            ...prevValues,
            [event.target.name]: event.target.value
        }));
    };

    return {
        handleChange,
        formValues
    }
};

