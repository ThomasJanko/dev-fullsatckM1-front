import axios from 'axios';

export default{
    
    getUsers(){
       return axios.get("http://localhost:4040/api/user/users")
        .then(res=>res)
        .catch(err=>console.log(err))
    },
    deleteUser(id){
        return axios.delete("http://localhost:4040/api/user/users/"+id)
        .then(res=>res)
        .catch(err=>console.log(err))
    },
    findOneUser(id, jwt){
        const config = {
            headers: {
              authorization: jwt,
            },
          };
        return axios.get("http://localhost:4040/api/user/user/"+id, config)
        .then(res=>res)
        .catch(err=>console.log(err))
    },

    getUserAuth(jwt){
        const config = {
            headers: {
              authorization: jwt,
            },
          };
        return axios.get("http://localhost:4040/api/user/user/", config)
        .then(res=>res)
        .catch(err=>console.log(err))
    }

}

