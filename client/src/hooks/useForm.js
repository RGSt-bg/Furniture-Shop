import { useState } from "react";

export function useForm(initialValues, submitCallback) {
    
    const [values, setValues] = useState(initialValues);
    const changeHandler = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        await submitCallback(values);
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    const setFormValues = (newValues) => {
        setValues({ ...values, ...newValues });
    };

    return {
        values,
        changeHandler,
        formSubmitHandler,
        resetForm,
        setFormValues,
    };
}