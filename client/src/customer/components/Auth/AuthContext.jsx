import React, { createContext, useState, useContext, useEffect } from "react";
import UserService from "../../../Services/User/UserService";

// Create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(
        localStorage.getItem("tokens") ? JSON.parse(localStorage.getItem("tokens")) : null
    );
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Update user when tokens are available
    useEffect(() => {
        const fetchUser = async () => {
            if (authTokens?.access_token) {
                const decodedToken = JSON.parse(atob(authTokens.access_token.split('.')[1]));
                const email = decodedToken.sub;
                try {
                    const backendUser = await UserService.getCurrentUser(authTokens.access_token, email);
                    setUser(backendUser);
                } catch (error) {
                    console.error("Error fetching user:", error);
                    setUser(null);
                }
            }
            setLoading(false);
        };

        fetchUser();
    }, [authTokens]);

    // Login function to get JWT tokens
    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.token) {
                    const tokens = {
                        access_token: data.token,
                        // refresh_token: data.refresh_token,       // add later when doing token refresh
                    };

                    localStorage.setItem("tokens", JSON.stringify(tokens));
                    setAuthTokens(tokens);

                    const decodedToken = JSON.parse(atob(data.token.split('.')[1]));
                    setUser(decodedToken);
                }
            } else {
                console.log("Login failed");
            }
        } catch (err) {
            console.error("Login error: ", err);
        }
    };

    // Handle login by Google
    const handleGoogleLogin = async (tokenFromUrl, onSuccess) => {
        const tokens = {
            access_token: tokenFromUrl,
        };

        localStorage.setItem("tokens", JSON.stringify(tokens));
        setAuthTokens(tokens);

        const decodedToken = JSON.parse(atob(tokenFromUrl.split('.')[1]));
        setUser(decodedToken);
        if (authTokens) {
            await UserService.getCurrentUser(authTokens?.access_token, user?.sub);
        }
        // console.log("test: ", authTokens?.access_token)

        if (onSuccess) onSuccess(); // optional callback
    };

    // Logout function to remove tokens and user data
    const logout = async () => {
        // If there are tokens in localStorage, send a logout request to the server
        const token = authTokens?.access_token;

        if (token) {
            try {
                const response = await fetch("http://localhost:8080/api/auth/logout", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`, // Add Bearer token in Authorization header
                    },
                });

                if (response.ok) {
                    console.log("Successfully logged out from the server.");
                } else {
                    console.log("Logout failed on the server.");
                }
            } catch (err) {
                console.error("Logout request error:", err);
            }
        }

        // Remove tokens and user data from local storage and state
        localStorage.removeItem("tokens");
        setAuthTokens(null);
        setUser(null);
    };

    // Function to refresh tokens
    const refreshTokens = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/auth/refresh", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ refresh_token: authTokens?.refresh_token }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.access_token) {
                    const tokens = {
                        access_token: data.access_token,
                        refresh_token: data.refresh_token,
                    };
                    // Store refreshed tokens in localStorage
                    localStorage.setItem("tokens", JSON.stringify(tokens));
                    setAuthTokens(tokens);

                    // Decode the token to get updated user info
                    const decodedToken = JSON.parse(atob(data.access_token.split('.')[1]));
                    setUser(decodedToken);
                }
            } else {
                logout(); // If refresh fails, log the user out
            }
        } catch (err) {
            console.error("Refresh tokens error: ", err);
            logout(); // Log out if any error occurs during token refresh
        }
    };

    // Protect the app with the tokens context
    return (
        <AuthContext.Provider value={{ authTokens, user, login, logout, refreshTokens, handleGoogleLogin, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use Auth context
export const useAuth = () => useContext(AuthContext);
