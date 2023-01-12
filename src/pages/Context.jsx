import { createContext, useState, useEffect, useReducer, useContext } from "react";
import { useRouter } from 'next/router'
import LoginForm from "../components/Auth/LoginForm";
// import UserService from "../services/User.service";

export const Context = createContext();

export const useAuth = () => {return useContext(Context)};

export const AuthContext = ({children}) => {
        const router = useRouter();
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [currentUser, setUser] = useState('HIIIIII')
        
    
    useEffect(() => {
        // checkIfUserIsConnected();
    }, []);
    
    
    const login = () => {
        console.log('login')
        setIsAuthenticated(true);
        // setUser(user)
        router.push('/users');
        
      };
    
      const logout = () => {
        console.log('logout')
        setIsAuthenticated(false);
      };

      const checkIfUserIsConnected = () => {
        if(!isAuthenticated){
            console.log('checkIfUserIsConnected')
            // router.push('/auth/login')
            return false;
        }
      }

    return (
        <Context.Provider 
            value={{
                login,
                currentUser,
                isAuthenticated,
                setIsAuthenticated,
                logout,
                checkIfUserIsConnected
                }}>
            {children} 
        </Context.Provider>
    )
}

