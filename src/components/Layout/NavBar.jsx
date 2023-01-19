import React, { useContext } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import ETH from "../../assets/img/eth_logo.png"
import Logout from "../../assets/img/logout.png"
import { Context } from '../../pages/Context';

export default function NavBar() {

  const router = useRouter();
  const {logout} = useContext(Context)
  
    const disconnect = () => {
        localStorage.setItem('Auth', '')
        logout()
    }   
  return (
    <nav className='shadow-xl shadow-red-500 flex justify-between text-md font-bold bg-red-400 p-4 text-white fixed w-full top-0 '>
        <div className='ml-36 my-auto text-xl'>
            <Link href={'/'}><span className={router.pathname == "/" ? "px-4 text-primary" : "px-4"}>Home</span></Link> 
            <Link href={'/users'}><span className={router.pathname == "/users" ? "px-4 text-primary" : "px-4"}>Users</span></Link> 
            <Link href={'/places'}><span className={router.pathname == "/places" ? "px-4 text-primary" : "px-4"}>Places</span></Link> 
            <Link href={'/auth/profil'}><span className={router.pathname == "/auth/profil" ? "px-4 text-primary" : "px-4"}>Profil</span></Link> 
            <Link href={'/auth/register'}><span className={router.pathname == "/auth/register" ? "px-4 text-primary" : "px-4"}>Register</span></Link>
       </div>
       <div className='px-4 cursor-pointer'>
            <Image 
            src={Logout} 
            alt={'logo'}
            width={26}
            height={26}
            onClick={() => disconnect()}
             />
       </div>
        
    </nav>
  )
}
