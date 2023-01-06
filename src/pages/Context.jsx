import { createContext, useState, useEffect, useReducer } from "react";
import { useRouter } from 'next/router'
// import UserService from "../services/User.service";

export const Context = createContext();



    export const RevochatProvider = ({children}) => {
        const router = useRouter();
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [currentUser, setUser] = useState()
        
    
    useEffect(() => {
        checkIfUserIsConnected();
    }, []);
    
    
    const login = () => {
        setIsAuthenticated(true);
        // setUser(user)
      };
    
      const logout = () => {
        setIsAuthenticated(false);
      };


    return (
        <Context.Provider 
            value={{currentUser, login, logout, isAuthenticated}}>
            {children} 
        </Context.Provider>
    )
}

