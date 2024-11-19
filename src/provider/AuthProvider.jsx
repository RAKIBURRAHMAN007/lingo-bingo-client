import { Children, createContext, useEffect, useState } from "react";
import app from "../fireBase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const googleProvider =new GoogleAuthProvider();
    console.log(user);
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () =>{
        signInWithPopup(auth,googleProvider);
        

    }
    const userLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        signOut(auth);
    }
    const authInfo = {
        createNewUser,
        user,
        setUser,
        googleSignIn,
        logOut,
        userLogin


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