import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/Auth/LoginForm'
import React, { createContext, useContext } from 'react';

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
