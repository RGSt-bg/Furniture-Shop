import { useState } from "react";

export function useForm(initialValues, submitCallback) {
    
    const [values, setValues] = useState(initialValues);
    const changeHandler = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();

        submitCallback(values);
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    const setFormValues = (newValues) => {
        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        formSubmitHandler,
        resetForm,
        setFormValues,
    };
}