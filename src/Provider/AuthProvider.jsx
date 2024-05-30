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
    
   // http://localhost:5000/jwt
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    

    const saveUser = async user=>{
        const currentUser = {
          email: user?.email,
          role: 'guest',
          status: 'Verified'
        }
    
        const {data} = await axios.put(' http://localhost:5000/user', currentUser, {withCredentials: true})
        return data;
      }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser);
           
            console.log('current user', currentUser);
            setLoading(false);
            if(currentUser){
                saveUser(currentUser)
                axios.post(' http://localhost:5000/jwt', loggedUser, {withCredentials: true})
                .then(res=> {console.log(res.data)})

            }
            else{
                axios.post(' http://localhost:5000/logout',loggedUser, {withCredentials:true} )
                .then(res=> console.log(res.data))
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [user?.email])
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