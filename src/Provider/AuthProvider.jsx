import {  GoogleAuthProvider,  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from 'axios'


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    
   
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser);
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email: userEmail}

            setLoading(false)
            if(currentUser){
                axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log('token is come', res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout', loggedUser, {withCredentials: true})
                .then(res=> console.log(res.data))
            }
        });
        return ()=> {
            unsubscribe();
        }

    }, [])
    const authInfo = {
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        user,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;