import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.config";
import toast from "react-hot-toast";

export const useProvider = createContext(null)
const UniProvider = ({children}) => {

    const [dark, setDark] = useState(true)
    const [loading, setLoading] = useState(true)
    const [user, setuser] = useState(null)
    const [errMsg,setErrMsg] = useState('')

    const successNotify=(text)=> toast.success(text)
    const errorNotify=(text)=> toast.error(text)

    
    
    // create user using email & pass
    const createUser=(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Login Using Email
    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // Update user Name and photo url
    const UpdateUser =(userName,photo)=> {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: `${userName}`, photoURL: `${photo}`
          })
}

    // Google Login
    const googleProvider = new GoogleAuthProvider()
    const googleSign =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }


    // Keep User Logged In
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setuser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])


    // LogOut User
    const logOut =()=>{
        return signOut(auth)
    }

    // Universal components
    const values = {
        dark,
        setDark,
        createUser,
        login,
        loading,
        UpdateUser,
        user,
        setuser,
        successNotify,
        googleSign,
        logOut,
        errMsg,
        setErrMsg,errorNotify
    }
       
    return (
        <useProvider.Provider value={values}>
            {children}
        </useProvider.Provider>
    );
    
    
};

export default UniProvider;