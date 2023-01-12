
import '../styles/globals.scss'
import "../tailwind/input.css"
import '../tailwind/output.css'
import MainLayout from '../components/Layout/MainLayout'
import { Route, Routes, Router } from "react-router-dom";

import type { AppProps } from 'next/app'
import LoginForm from '../components/Auth/LoginForm'
import { Context, AuthContext } from './Context';
import ProtectedRoute from './ProtectedRoute'
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';




export default function App({ Component, pageProps }: AppProps) {

const router = useRouter();
const isAuthenticated = useContext(Context)

useEffect(() => {
  // checkIfUserIsConnected
  // isAuthenticated
  // ? router.push("/")
  // : router.push("/auth/login");
}, [])

  return (
    
  //   <Router>
  //   <AuthContext>
  //     <Routes>
  //       <Route
  //         render={
  //           isAuthenticated 
  //             ? <MainLayout>
  //             <Component {...pageProps} />
  //           </MainLayout>
  //             : <Redirect to="/auth/login" />
  //         }
  //         {...pageProps}
  //       />
  //     </Routes>
  //   </AuthContext>
  // </Router>
     <AuthContext>

            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>

    </AuthContext>

      
  )
}
