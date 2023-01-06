
import '../styles/globals.scss'
import "../tailwind/input.css"
import '../tailwind/output.css'
import MainLayout from '../components/Layout/MainLayout'
import { Route, redirect } from "react-router-dom";

import type { AppProps } from 'next/app'
import LoginForm from '../components/Auth/LoginForm'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        </>
  )
}
