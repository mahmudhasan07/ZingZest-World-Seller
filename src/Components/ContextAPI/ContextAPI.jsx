import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import UpdateInfo from "../Home/UpdateInfo";
import app from "../Firebase/Firebase.config";

export const Context = createContext()
const ContextAPI = ({ children }) => {

    const [user, setuser] = useState()
    const [loading, setloading] = useState(true)
    const auth = getAuth(app);

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setloading(true)
        return signOut(auth)
    }

    const updateUser = (name, photo) => {
        setloading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (customer) => {
            if (customer) {
                setuser(customer)
                setloading(false)
            }
        })
    }, [auth])

    const data = { createUser, logInUser, logOutUser, updateUser, user, loading }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

};

export default ContextAPI;