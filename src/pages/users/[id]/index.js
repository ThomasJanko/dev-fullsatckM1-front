import React, { useEffect, useState } from 'react'
import usersService from '../../../service/users.service';
import { useRouter } from 'next/router';
import Alert from '../../../components/Utilities/Alert'

export default function index() {


    const router = useRouter();
    const { id } = router.query;

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({})
    const [editing, setEditing] = useState(false)
    const [modal, setmodal] = useState(false)

   

    useEffect(() => {
          if(router.isReady){
              fetchData();

          }
      }, [router.isReady]);

    

    async function fetchData() {
        try {
          let jwt = JSON.parse(localStorage.getItem('Auth'))
          const response = await usersService.findOneUser(id, jwt);
          setUser(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
  
      if (loading) {
        return <p className='text-2xl font-bold text-center mt-52'>Loading...</p>;
        }
        if (error) {
          return <p>Error: Your are not Administrator</p>;
        }

 
        const editUser = () => {
          let jwt = JSON.parse(localStorage.getItem('Auth'))
          console.log(user)
          usersService.editUser(user._id, user, jwt)
          .then((res) => {
            setUser(res.data)
            setmodal(true)
            setEditing(false)
          })
          .catch(err => {console.log(err)})
        }

  return (
    <div className='mx-auto bg-red-500 mt-52 p-8 rounded-lg' style={{width: '40%'}}>
    {user &&
      <>
      {editing ? 
      <div>
        <input className='rounded-xl w-full p-1 px-2 bg-red-400'
            type='text'
            value={user.firstName}
            onChange={e => {
              const newUser = {...user};
              newUser.firstName = e.target.value;
              setUser(newUser);
            }}
            placeholder={user.firstName}
            />
            <br/>
        <input className='mt-2 rounded-xl w-full p-1 px-2 bg-red-400'
            type='text'
            value={user.lastName}
            onChange={e => {
              const newUser = {...user};
              newUser.lastName = e.target.value;
              setUser(newUser);
            }}
            placeholder={user.lastName}
            />
            <br/>
        <input className='mt-2 rounded-xl w-full p-1 px-2 bg-red-400'
            type='text'
            value={user.email}
            onChange={e => {
              const newUser = {...user};
              newUser.email = e.target.value;
              setUser(newUser);
            }}
            placeholder={user.email}
            />
    <br/>

            <div className='mt-2'>
            Admin: <span className='ml-2 cursor-pointer font-bold rounded-full border p-1' onClick={() => { const newUser = {...user}; newUser.isAdmin = !newUser.isAdmin; setUser(newUser)}}>{user.isAdmin ? 'YES': 'NO'} </span> 
            </div>
            <button type="button" className='rounded mt-2 bg-green-600  border py-1 px-2' onClick={()=> editUser()}>Valider</button>
      </div>
      :
      <div className='flex justify-between'>
        
        <div className='py-2'>
            <li>FIRSTNAME: <span className='font-bold'>{user.firstName}</span> </li>
            <li>LASTNAME: <span className='font-bold'>{user.lastName}</span> </li>
            <li>EMAIL: <span className='font-bold'>{user.email}</span> </li>
            <li>ADMIN: <span className='font-bold'>{user.isAdmin? 'YES' : 'NO'}</span> </li>
        </div>
        <div className='bg-red-400 mt-6 rounded-2xl' style={{width: '80px', height:'80px'}}>
                    <img className='rounded-xl' 
                    src={user.isAdmin?
                     'https://png.pngtree.com/png-vector/20190629/ourmid/pngtree-office-work-user-icon-avatar-png-image_1527655.jpg'
                    : 'https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg'} alt=""/>
                </div>
      </div>

      }
      <div className='flex w-full justify-center'>
      <button className='rounded mt-2 w-20 bg-orange-600  border py-1 px-2' onClick={()=> setEditing(!editing)} > Edit</button>
        
      </div>
      
      
      </>}
      {modal &&
      <div className='fixed top-24 mx-auto'>
        <Alert type='success'>
           <div>
            <span>User editing successfull ! </span> <span className='w-full cursor-pointer' onClick={() => setmodal(false)}>X</span>
           </div> 
        </Alert>
      </div>
      }
      </div>
  )
}
