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
        <input className=''
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
        <input className='mt-2'
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
        <input className='mt-2'
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
            <button type="button" className='rounded mt-2 bg-green-600  border py-1 px-2' onClick={()=> editUser()}>Valider</button>
      </div>
      :
        <div>
            <div>FIRSTNAME: <span>{user.firstName}</span> </div>
            <div>LASTNAME: <span>{user.lastName}</span> </div>
            <div>EMAIL: <span>{user.email}</span> </div>
            <div>ADMIN: <span>{user.isAdmin? 'YES' : 'NO'}</span> </div>
        </div>
      }
      <button className='rounded mt-2 bg-orange-600  border py-1 px-2' onClick={()=> setEditing(!editing)} > Edit</button>
      
      
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
