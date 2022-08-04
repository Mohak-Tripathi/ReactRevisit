import React from 'react'
import { createContext } from "react"
import {useState} from "react"

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [isAuth, setIsAuth] = useState(false)


    function handleChange(state) {
        setIsAuth(state)
    }
    return <AuthContext.Provider value={{ isAuth, handleChange }}> {children}  </AuthContext.Provider>
}


// export default AuthContextProvider