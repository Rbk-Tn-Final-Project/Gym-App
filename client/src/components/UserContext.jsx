import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        console.log(user);
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');

        if (token && userData && userData !== "undefined") {
            try {
                setUser(JSON.parse(userData));
            } catch (error) {
                console.error('Failed to parse user data:', error);
                localStorage.removeItem('user');
            }
        } else if (userData === "undefined") {
            console.warn('User data in localStorage is "undefined". Clearing it.');
            localStorage.removeItem('user');
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
