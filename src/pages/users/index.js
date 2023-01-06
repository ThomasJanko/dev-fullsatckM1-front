import React, { useEffect, useState, useContext } from 'react'
import usersService from '../../service/users.service';
import { useRouter } from 'next/router'
import Loader from '../../components/Utilities/Loader';
// import { Context } from '../../pages/Context'

export default function index() {

  const router = useRouter()

    const [users, setUsers] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
          fetchData();
    }, []);

    async function fetchData() {
      try {
        const response = await usersService.getUsers();
        setUsers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    if (loading) {
        return <p className='text-2xl font-bold text-center mt-52'>Loading...</p>;
        // return <Loader/>
      }
      if (error) {
        return <p>Error: {error.message}</p>;
      }

      const deleteUser = (user_id) => {
        console.log(user_id)
        usersService.deleteUser(user_id)
        .then(() => {
          
        })
      }

      const seeUser = (user_id) => {
        //UserAuth = Admin
        // let jwt = JSON.parse(localStorage.getItem('Auth'))
        // usersService.findOneUser(user_id, jwt)
        // .then(() => {
        //   router.push(`/users/${user_id}`)
        // })
        // .catch((err) => {console.log(err)});
        router.push(`/users/${user_id}`)

        
      }

  return (
    <div className='h-full mt-20'>
       <h1>Users List</h1>
       <div className='mt-4  justify-around p-8 overflow-y-scroll h-full' >

        {users && users.map((user)=>(
            <div className='shadow-xl shadow-cyan-500 border bg-green-400 rounded-md p-4 m-4 mx-auto ' key={user._id} style={{width: '600px'}}>
              <span className='font-bold '>ID: </span>  {user._id} <br/>
              <span className='font-bold '>firstName: </span>  {user.firstName} <br/>
              <span className='font-bold '>lastName: </span> {user.lastName} <br/>
              <span className='font-bold '>email:</span>   {user.email}  <br/>
              <span className='font-bold '>administrator:</span> {user.isAdmin? 'YES' : 'NO'}  <br/>
              <button  className='rounded mt-2 ml-8  bg-red-600  border py-1 px-2' onClick={() => deleteUser(user._id)}>Delete</button>
              <button  className='rounded mt-2 ml-8  bg-blue-600  border py-1 px-2' onClick={() => seeUser(user._id)}>See</button>
              

            </div>
        ))}

       </div>
    </div>
  )
}
