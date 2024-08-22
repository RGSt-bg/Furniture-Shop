import { BASE_URL } from "./variables.js";

export const register = async function (path, registerData) {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(registerData),
            });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        if (data.token != undefined)
            localStorage.setItem("auth", data.token);

        return data;

    } catch (error) {
        return { success: false, message: error.message };
    }
}

export const login = async function (path, loginData) {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(loginData),
            });
        const data = await response.json();
        if (data.message != 'Wrong password or email address!')
            localStorage.setItem("auth", data.token);
            localStorage.setItem('userId', data._id);
        return data;
    } catch (error) {
        alert(error.message);
    }
};

export const logout = async function (path) {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            });
        const data = await response.json();
        localStorage.removeItem("auth");
        return data;
    } catch (error) {
        return error.message;
    }
};
