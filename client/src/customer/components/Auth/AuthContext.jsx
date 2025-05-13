import React, { createContext, useState, useContext, useEffect } from "react";

// Create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(
        localStorage.getItem("tokens") ? JSON.parse(localStorage.getItem("tokens")) : null
    );
    const [user, setUser] = useState(null);

    // Update user when tokens are available
    useEffect(() => {
        if (authTokens) {
            const decodedToken = JSON.parse(atob(authTokens.access_token.split('.')[1]));
            setUser(decodedToken);
        }
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
                        access_token: data.token, // <- match server key
                        // refresh_token: data.refresh_token, // add this if server sends it
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

    // Function to refresh tokens (you can use this for token expiry)
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
        <AuthContext.Provider value={{ authTokens, user, login, logout, refreshTokens }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use Auth context
export const useAuth = () => useContext(AuthContext);
