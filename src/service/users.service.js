import axios from 'axios';

export default{
    
    register(form){
       return axios.post("http://localhost:1337/api/auth/local/register", form)
        .then(res=>res.json())
        .catch(err=>console.log(err))
    },

    login(form){
       return axios.post('http://localhost:1337/api/auth/local', form)
        // .then(res=>res.json())
        // .then(localStorage.setItem('User', JSON.stringify(form)))
        // .then(res => { localStorage.setItem('Token', res.data.jwt)
        //  })
        // //  .then(() => this.setState({ redirection: true }))
        // .catch(err=>console.log(err))
    }
}