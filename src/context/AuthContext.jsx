import {createContext, useContext, useState} from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const userInfo = JSON.parse(
        localStorage.getItem("userInfo"));
    const [user, setUser] = useState(userInfo); // null означает, что пользователь не авторизован
    const [isAuth, setIsAuth] = useState(false);/*Boolean(userInfo));*/

    const login = async ({login, password}) => {
        setIsAuth(true);
        return true;
    };

    const logout = () => {
        setIsAuth(false);
        setUser(null);
        return true;
    };

    const signup = async ({name, login, password}) => {
        return true;
    };

    return (
        <AuthContext.Provider value={{
            user, setUser,
            isAuth, setIsAuth,
            login, logout, signup
        }}>
            {children}
        </AuthContext.Provider>
    );
}

// Кастомный хук
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth должен использоваться внутри AuthProvider');
    }
    return context;
}

export default AuthContext;