import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ETH from "../../assets/img/eth_logo.png"
import Logout from "../../assets/img/logout.png"

export default function NavBar() {

    const logout = () => {
        localStorage.setItem('Auth', '')
    }   
  return (
    <nav className='shadow-xl shadow-red-500 flex justify-between text-md font-bold bg-red-400 p-4 text-white fixed w-full top-0 '>
        <div className='ml-36 my-auto text-xl'>
            <Link href={'/'}><span className='px-4 shadow-sm shadow-white'>Home</span></Link> 
            <Link href={'/users'}><span className='px-4'>Users</span></Link> 
            <Link href={'/auth/profil'}><span className='px-4'>Profil</span></Link> 
            <Link href={'/auth/register'}><span className='px-4'>Register</span></Link>
       </div>
       <div className='px-4 cursor-pointer'>
            <Image 
            src={Logout} 
            alt={'logo'}
            width={26}
            height={26}
            onClick={() => logout()}
             />
       </div>
        
    </nav>
  )
}
