import { createContext, useContext, useState } from 'react';
import axios from '@/utils/AuthAxios';
import { BASE_URL } from '@/constants/UrlConstants';

// Create a Context
const AuthContext = createContext({
    user: null,
    login: async (username: string, password: string) => { return false; },
    logout: () => { },
    checkAuth: async () => { return false; }, 
    loading: true,
    getUser: () => { },
});

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};




// Auth Provider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const checkAuth = async () => {
        try {
            
            const token = JSON.parse(localStorage.getItem('user'));
            if (token && token.access) {
                const response = await axios.get(`${BASE_URL}/auth/verifyAuth`);        
                return true;
            }
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
            
            return false;
        }
    };  

    const login = async (username, password) => {
        try {
            console.log(username, password)
            const response = await axios.post(`${BASE_URL}/auth/verifyAccount`, { username, password });
            localStorage.setItem('user', JSON.stringify(response.data));
            console.log(response.data.account)
            setUser(JSON.stringify(response.data.account));    
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        delete axios.defaults.headers.common['Authorization'];
        setUser(null);
    };

    const getUser = () => { 
        
        const user = localStorage.getItem('user'); // Retrieve the string directly
        const account = user ? JSON.parse(user).account : null; // Parse it into an object if it exists
        return account;

        }

    const value = {
        user,
        login,
        logout,
        checkAuth,
        loading,
        getUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
