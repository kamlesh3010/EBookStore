import React, { useContext, useState, createContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {  // changed 'child' to 'children'
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined);

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}  // changed 'child' to 'children'
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
