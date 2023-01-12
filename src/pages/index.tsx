import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/Auth/LoginForm'
import React, { createContext, useContext } from 'react';
import NavBar from './../components/Layout/NavBar'

import { Context } from './Context'


export default function Home() {
  
  return (
        <LoginForm/>
  )
}
