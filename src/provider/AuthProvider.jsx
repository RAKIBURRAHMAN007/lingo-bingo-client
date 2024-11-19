import { Children, createContext, useEffect, useState } from "react";
import app from "../fireBase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        createNewUser,
        user,
        setUser,


    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();

        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;