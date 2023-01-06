import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

export default function MainLayout({children}) {
  return (
    <>
    <NavBar/>
    <SideBar />
    {children}
    </>
  )
}
