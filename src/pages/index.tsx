import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import React from 'react';
import LoginForm from '../components/Auth/LoginForm'
import TitlePage from '../components/TitlePage'

import { Context } from './Context'

export default function Home() {
  const [user, setUser] = useState({});
  
  return (
    <Context.Provider value={[user, setUser]}>
        
    <div >
      
      <h1 className='text-red-600 text-3xl font-bold underline'>Formulaire</h1>
     
     {/* <TitlePage/> */}
      <LoginForm/>
      
    </div>
    </Context.Provider>
  )
}
