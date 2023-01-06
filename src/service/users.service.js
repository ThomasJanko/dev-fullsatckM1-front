import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default{
    
    getUsers(){
       return axios.get(`${URL}/user/users`)
        .then(res=>res)
        .catch(err=>console.log(err))
    },
    deleteUser(id){
        return axios.delete(`${URL}/user/users/`+id)
        .then(res=>res)
        .catch(err=>console.log(err))
    },
    findOneUser(id, jwt){
        const config = {
            headers: {
              authorization: jwt,
            },
          };
        return axios.get(`${URL}/user/user/`+id, config)
        .then(res=>res)
        .catch(err=>console.log(err))
    },

    getUserAuth(jwt){
        const config = {
            headers: {
              authorization: jwt,
            },
          };
        return axios.get(`${URL}/user/user/`, config)
        .then(res=>res)
        .catch(err=>console.log(err))
    }

}

