import React, { useContext } from "react";
import UserContext from "./userContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ exact, path, children }) {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
    if(!currentUser) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default PrivateRoute;