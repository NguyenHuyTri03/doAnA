import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const GoogleCallback = () => {
    const { handleGoogleLogin } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const processGoogleLogin = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get("token");

            if (token && token.trim() !== "") {
                await handleGoogleLogin(token); // no navigate here
                navigate("/");
            } else {
                console.warn("No token found in URL");
                navigate("/login");
            }
        };

        processGoogleLogin();
    }, [handleGoogleLogin, navigate]);

    return <p>Logging in with Google...</p>;
};

export default GoogleCallback;