import React, { useEffect, useState } from 'react';
import placesService from '../../service/places.service';

const Index = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const [places, setPlaces] = useState([])


    useEffect(() => {
        fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await placesService.getPlaces();
      setPlaces(response.data);
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
            {places && places.map((place) => 
            <div className='border p-8 w-1/3 m-4 bg-cyan-200 rounded-xl shadow-2xl shadow-stone-400 '>
                <div className='flex justify-between'>
                    <div>
                        <div className=''>title: <span className='font-bold uppercase'>{place.title}</span>    </div> 
                        <div> type:  {place.type} </div>
                        <div> pricePerDay:  {place.pricePerDay} </div>
                        <div> capcity:  {place.capcity} </div>
                        <div> description:  {place.description} </div>
                    </div>
                    <div className=''>
                        <img className='rounded-xl' src={place.image} width={120} height={120} />
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
