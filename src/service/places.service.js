import axios from 'axios';


const URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default{
    
    addPlace(form){
       return axios.post(`${URL}/auth/place/place`, form)
        .then(res=>res)
        .catch(err=>err)
    },

    getPlaces(){
       return axios.get(`${URL}/place/places`)
        .then(res=>res)
        // .then(localStorage.setItem('User', JSON.stringify(form)))
        // .then(res => { localStorage.setItem('Token', res.data.jwt)
        //  })
        // //  .then(() => this.setState({ redirection: true }))
        .catch(err=>console.log(err))
    }
}