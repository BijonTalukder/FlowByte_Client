import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth=getAuth(app)
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const [booked,setBooked]=useState('')
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    const updateUser=(userInfo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,userInfo)
    }
    const googleProvider =(provider)=>{
        setLoading(true)
       return signInWithPopup(auth,provider)

    }
    const logOut= ()=>{
        setLoading(true)
         return signOut(auth);
    
    
    }
    useEffect(()=>{
        const unaubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unaubscribe()
    },[])
    const authInfo={
        createUser,
        login,
        updateUser,
        googleProvider,
        logOut,
        user,
        loading,
        booked,
        setBooked
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;