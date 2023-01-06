import React,{ useState } from 'react'
import ETH from "../../assets/img/eth_logo.png"
import Menu from "../../assets/img/menu.png"
import closeMenu from "../../assets/img/closeMenu.png"
import Logout from '../../assets/img/logout.png'
import Image from 'next/image'
import Link from 'next/link'

export default function SideBar() {
    const [menu, setMenu] = useState(false)

    const logout = () => {
        localStorage.setItem('Auth', '')
    }

  return (
    <>
    {menu? 
    
    <div className='fixed top-0 left-0 h-full w-40 bg-red-400 transition duration-500 ease-linear'>
         <div className='px-14 mt-4 cursor-pointer' onClick={() => setMenu(false)}>
            <Image 
                src={closeMenu} 
                alt={'logo'}
                width={30}
                height={30}
             />
       </div>
        <div className='flex flex-col text-xl text-white relative mt-6 ml-4 '>
        <Link href={'/'}> <li  className='py-2'> <span>Home</span> </li></Link>
        <Link href={'/users'}><li className='py-2'> <span>Users</span></li></Link>
        <Link href={'/auth/profil'}><li className='py-2'> <span >Profil</span> </li></Link>
        <Link href={'/auth/register'}> <li className='py-2'> <span>Register</span> </li></Link>
        </div>
        <div className='absolute bottom-2 ml-16 cursor-pointer'  onClick={() => logout()}>
            <Image src={Logout} width={30} height={30} alt='logout' />
        </div>

    </div>
    :
    <div className='fixed top-3 left-6 cursor-pointer' onClick={()=>setMenu(true)}>
       <Image 
        src={Menu} 
        alt={'Menu'}
        width={30}
        height={30}
        />
    </div>
    }
    </>
  )
}
