import { BASE_URL } from "./variables.js";

export const login = async function (path, loginData) {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(loginData),
            });
        const data = await response.json();
        return data;
    } catch (error) {
        alert(error.message);
    }
};

export const register = async function (path, registerData) {
    try {
        const response = await fetch(`${BASE_URL}${path}`, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(registerData),
            });
        const data = await response.json();
        return data;
    } catch (error) {
        alert(error.message);
    }
}