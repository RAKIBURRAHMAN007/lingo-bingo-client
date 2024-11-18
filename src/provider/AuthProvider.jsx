import { Children, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const name = 'ratul'
    const authInfo = {
        name,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;