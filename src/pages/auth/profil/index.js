import React, { useEffect, useState} from 'react'
import Loader from '../../../components/Utilities/Loader';
import usersService from '../../../service/users.service';

export default function index() {
    const [user, setUser] = useState({})
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const delay = ms => new Promise(res => setTimeout(res, ms));
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        // await delay(1000);
        try {
          let jwt = JSON.parse(localStorage.getItem('Auth'))
          const response = await usersService.getUserAuth(jwt);
          setUser(response.data);
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

  return (
    <div className='mx-auto'>
        <div className='text-center mt-36 text-2xl'>Profil Page</div>
        <div>
            <div className='shadow-2xl shadow-cyan-600 bg-green-400  max-w-md mx-auto mt-4  rounded-xl flex justify-evenly' >
                <div className='p-4 ml-2 font-semibold'>
                    <li> firstName: <span className='italic text-slate-500'>{user.firstName} </span>  </li> <br/>
                    <li> lastName: <span className='italic text-slate-500'>{user.lastName}</span> </li>
                    <br/> <br/>
                    <li>email: <span className='italic text-slate-700'> {user.email}</span></li>
                </div>
                <div className='bg-red-400 mt-12 rounded-2xl' style={{width: '80px', height:'80px'}}>
                    <img className='rounded-xl' 
                    src={user.isADmin?
                     'https://png.pngtree.com/png-vector/20190629/ourmid/pngtree-office-work-user-icon-avatar-png-image_1527655.jpg'
                    : 'https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg'} alt=""/>
                </div>
                
            </div>

            <div className='shadow-xl shadow-cyan-300 bg-green-300 mt-8 mx-auto rounded-xl max-w-md '>
            <div className='py-8  text-center'>
                   <span className='text-indigo-600'>{user.isAdmin? 'Your are Admin' : 'Your are User'} </span> <br/>
                   <span className='text-md'>Your ID: <span className='font-medium text-red-300'> {user._id} </span>  </span> 
                </div>
            </div>
        </div>
    </div>
  )
}
