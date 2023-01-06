import axios from 'axios';

export default{
    
    register(form){
       return axios.post("http://localhost:4040/api/auth/register", form)
        .then(res=>res)
        .catch(err=>err)
    },

    login(form){
       return axios.post('http://localhost:4040/api/auth/login', form)
        .then(res=>res)
        // .then(localStorage.setItem('User', JSON.stringify(form)))
        // .then(res => { localStorage.setItem('Token', res.data.jwt)
        //  })
        // //  .then(() => this.setState({ redirection: true }))
        .catch(err=>console.log(err))
    }
}