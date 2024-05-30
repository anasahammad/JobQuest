import {  GoogleAuthProvider,  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
    
   // https://jobquest-server-pi.vercel.app/jwt
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
    
        const {data} = await axios.put(' https://jobquest-server-pi.vercel.app/user', currentUser, {withCredentials: true})
        return data;
      }

      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
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
                axios.post(' https://jobquest-server-pi.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res=> {console.log(res.data)})

            }
            else{
                axios.post(' https://jobquest-server-pi.vercel.app/logout',loggedUser, {withCredentials:true} )
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
        setLoading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;