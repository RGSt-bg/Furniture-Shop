import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { AuthContext } from "../../App.jsx";

export default function NoAuthRoutes() {

    const {isAuth} = useContext(AuthContext);

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return <Outlet />
};

