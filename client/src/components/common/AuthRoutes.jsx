import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AuthContext } from "../../App.jsx";

export default function AuthRoutes() {

    const {isAuth} = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to="/auth/login" />;
    }

    return <Outlet />
};