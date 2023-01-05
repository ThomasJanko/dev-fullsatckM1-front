import React, { useEffect, useState } from 'react'
import usersService from '../../service/users.service';

export default function index() {

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
        return <p>Loading...</p>;
      }
      if (error) {
        return <p>Error: {error.message}</p>;
      }

      const deleteUser = (user_id) => {
        console.log(user_id)
        usersService.deleteUser(user_id)
        .then(() => {
          fetchData();
        })
        
      }

  return (
    <div className=''>
       <h1>Users List</h1>

       <div className='mt-4 justify-around p-8'>

        {users && users.map((user)=>(
            <div className=' border bg-green-400 rounded-md p-4 m-4 mx-auto  ' key={user.id} style={{width: '600px'}}>
              <span className='font-bold '>ID: </span>  {user._id} <br/>
              <span className='font-bold '>firstName: </span>  {user.firstName} <br/>
              <span className='font-bold '>lastName: </span> {user.lastName} <br/>
              <span className='font-bold '>email:</span>   {user.email}  <br/>
              <span className='font-bold '>administrator:</span> {user.isAdmin? 'YES' : 'NO'}  <br/>
              <button  className='rounded mt-2 ml-8  bg-red-600  border py-1 px-2' onClick={() => deleteUser(user._id)}>Delete</button>
              

            </div>
        ))}

       </div>
    </div>
  )
}
