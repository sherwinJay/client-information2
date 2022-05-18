import axios from 'axios';
import { useRouter } from 'next/router';

const action = ( session, client ) => {

  const API = axios.create({baseURL: `${process.env.SERVER_SITE}`})
  const router = useRouter()

  API.interceptors.request.use((req) => {
    if(session.accessToken){
      req.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return req;
  });

  // create client
  const addClients = () => {
    API.post(`/api/members`, client)
      .then(res => {
        // put something after success
        if(res.status === 201){
          router.replace('/dashboard')
        }
      })
      .catch(err => console.log(err));
  }

  // edit client information
  const updateClient = (client) => {
    API.patch(`/api/members/${client._id}`, client)
      .then( res => {
        // put something after success
        if(res.status === 200){
          router.replace('/dashboard')
        }
      })
      .catch(err => console.log(err));
  }

  // delete client
  const deleteClient = (client) => {
    API.delete(`/api/members/${client}`)
      .then(res => {
        // put something after success
        if(res.status === 200){
          router.replace('/dashboard')
        }
      })
      .catch(err => console.log(err));
  }
  
  return {  
    addClients,
    updateClient,
    deleteClient
  }
}

export default action
