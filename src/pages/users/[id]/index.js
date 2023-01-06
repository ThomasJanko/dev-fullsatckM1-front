import React, { useEffect, useState } from 'react'
import usersService from '../../../service/users.service';
import { useRouter } from 'next/router';


export default function index() {


    const router = useRouter();
    const { id } = router.query;

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([])
   


    useEffect(() => {
        if(router.isReady){
            fetchData();
        }
    }, []);

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

  return (
    <div className='mx-auto bg-red-500 mt-52 p-8 rounded-lg' style={{width: '40%'}}>
        <div>
            <div>FIRSTNAME: <span>{user.firstName}</span> </div>
            <div>LASTNAME: <span>{user.lastName}</span> </div>
            <div>EMAIL: <span>{user.email}</span> </div>
            <div>ADMIN: <span>{user.isAdmin? 'YES' : 'NO'}</span> </div>
        </div>
    </div>
  )
}
