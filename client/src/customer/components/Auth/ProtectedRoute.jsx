// src/components/ProtectedRoute.js
import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { authTokens } = useAuth();

    // If no authTokens, redirect to login page
    if (!authTokens) {
        return <Navigate to="/login" replace />;
    }

    // If user is authenticated, render the protected component
    return <Component {...rest} />;
};

export default ProtectedRoute;
