import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import usersService from '../../../service/users.service';

const Index = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const [places, setPlaces] = useState([])


    useEffect(() => {
        fetchData();
  }, []);

  async function fetchData() {
    // await delay(1000);
    try {
      let jwt = JSON.parse(localStorage.getItem('Auth'))
      const response = await usersService.getUserAuth(jwt);
    //   setUser(response.data);
      console.log(response)
      setPlaces(response.data.places);
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
        <div className='mt-40 flex flex-wrap justify-center w-full p-4'>
           
          <Link href={'/places/create'}>
            <button className='absolute left-20 top-28 rounded-md bg-primary p-2 shadow-xl' type="text"> Create Place</button>
          </Link>
            {places && places.map((place) => 
            <div className='border p-8 w-1/3 m-4 bg-cyan-200 rounded-xl shadow-2xl shadow-stone-400 '>
                <div className='flex justify-between'>
                    <div>
                        <div className=''>title: <span className='font-bold uppercase'>{place.title}</span>    </div> 
                        <div> type:  {place.type} </div>
                        <div> pricePerDay:  {place.pricePerDay} </div>
                        <div> capacity:  {place.capacity} </div>
                        <div> description:  {place.description} </div>
                    </div>
                    <div className=''>
                        <img className='rounded-xl' src={place.image? place.image : 'https://play-lh.googleusercontent.com/1zfN_BL13q20v0wvBzMWiZ_sL_t4KcCJBeAMRpOZeT3p34quM-4-pO-VcLj8PJNXPA0' } width={120} height={120} />
                        <div>
                            <span className=' mt-2' type="button" > {place.owner.email} </span>
                        </div>
                    </div>
                </div>

            </div>
            )}
            <div>
                <span></span>
            </div>
        </div>
    );
}

export default Index;
