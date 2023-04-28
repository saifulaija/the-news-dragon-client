import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

    // For Signup

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // For Signin

    const logIn =(email, password)=>{

        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // For Signout

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    // For observer

    useEffect(()=>{
      const unsubscribe =   onAuthStateChanged(auth, loggedUser=>{
            console.log(loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {user, createUser, logIn, logOut, loading}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;