import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import placesService from '../../../service/places.service';
import { useRouter } from 'next/router';


const PlaceForm = () => {

    const router = useRouter();

  const { errors } = useForm();
  const [place, setPlace] = useState({
    title: '',
    type: '',
    owner: '',
    pricePerDay: '',
    capacity: '',
    description: '',
    image: '',
    Addresse: {
        city: '',
        street:{
            zipCode: '',
            gps:{
                lat: '',
                long: ''
            }
        }
    }
  });

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    // let a = {...place}
    // a.owner = user.id

    let jwt = JSON.parse(localStorage.getItem('Auth'))
    // console.log(place);
    placesService.addPlace(place, jwt)
    .then((res) => {
        console.log(res)
        router.push('/places')
    })
    .catch((errors) => {
        console.log(errors)
    })
  };
 

  return (
    <form  onSubmit={handleSubmit} className='mx-auto w-1/2 mt-24'>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
          Title
        </label>
        <input
          className={`border border-gray-400 p-2 rounded w-full ${
           errors && errors.title ? 'border-red-500' : ''
          }`}
          type="text"
          name="title"
          id="title"
          onChange={(e) => setPlace({...place,title:e.target.value})}
          value={place.title}
        />
        {errors && errors.title && (
          <p className="text-red-500 text-xs italic">
            Title is required and must be between 2 and 50 characters.
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="type">
          Type
        </label>
        <input
          className={`border border-gray-400 p-2 rounded w-full ${
           errors && errors.type ? 'border-red-500' : ''
          }`}
          type="text"
          name="type"
          id="type"
          onChange={(e) => setPlace({...place,type:e.target.value})}
          value={place.type}
        />
        {errors && errors.type && (
          <p className="text-red-500 text-xs italic">
            Type is required
          </p>
        )}
      </div>
    
    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="pricePerDay">
          Price per day
        </label>
        <input
          className={`border border-gray-400 p-2 rounded w-full`}
          type="number"
          name="pricePerDay"
          id="pricePerDay"
          onChange={(e) => setPlace({...place,pricePerDay:e.target.value})}
          value={place.pricePerDay}
        />
    </div>

    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="capcity">
          Capacity
        </label>
        <input
          className={`border border-gray-400 p-2 rounded w-full`}
          type="number"
          name="capacity"
          id="capacity"
          onChange={(e) => setPlace({...place,capacity:e.target.value})}
          value={place.capacity}
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className={`border border-gray-400 p-2 rounded w-full`}
          name="description"
          id="description"
          onChange={(e) => setPlace({...place,description:e.target.value})}
          value={place.description}
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
          Image
        </label>
        <input
          className={`border border-gray-400 p-2 rounded w-full`}
          type="text"
          name="image"
          id="image"
          onChange={(e) => setPlace({...place,image:e.target.value})}
          value={place.image}
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="city">
          City
        </label>
        <input
          className={`border border-gray-400 p-2 rounded w-full`}
          type="text"
          name="Addresse.city"
          id="city"
          onChange={(e) => setPlace({ ...place, Addresse: { ...place.Addresse, city: e.target.value } })}
          value={place.Addresse.city}
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="zipCode">
          Zip Code
        </label>
        <input
          className={`border border-gray-400 p-2 rounded w-full`}
          type="number"
          name="Addresse.street.zipCode"
          id="zipCode"
          onChange={(e) => setPlace({ ...place, Addresse: { ...place.Addresse, street: {...place.Addresse.street, zipCode: e.target.value } } })}
          value={place.Addresse.street.zipCode}
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="lat">
          Latitude
        </label>
        <input
          className={`border border-gray-400 p-2 rounded w-full`}
          type="number"
          name="Addresse.street.gps.lat"
          id="lat"
          onChange={(e) => setPlace({ ...place, Addresse: { ...place.Addresse, street: {...place.Addresse.street, gps: {...place.Addresse.street.gps, lat: e.target.value}} } })}
          value={place.Addresse.street.gps.lat}
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="long">
          Longitude
        </label>
        <input
          className={`border border-gray-400 p-2 rounded w-full`}
          type="number"
          name="Addresse.street.gps.long"
          id="long"
          onChange={(e) => setPlace({ ...place, Addresse: { ...place.Addresse, street: {...place.Addresse.street, gps: {...place.Addresse.street.gps, long: e.target.value}} } })}

          value={place.Addresse.street.gps.long}
        />
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
      Submit
    </button>
    </form>
  )
}
export default PlaceForm;
