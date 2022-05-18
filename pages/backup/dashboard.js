import AddForm from '../components/Form/AddForm';
import useForms from '../components/Form/useForm';
import axios from 'axios';
import { useState, useEffect } from 'react';
import TitleSection from '../components/PageTitle';
import ClientList from '../components/ClientList';
import { getSession, signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Image from 'next/image'
import action from '../components/actions/action';
// import {addClients, updateClient, deleteClient } from '../components/actions/action'




export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/api/members');
  const data = await res.json();

  return {
    props: { clientsData: data }
  }
}

const Dashboard = ({  clientsData }) => {

  const [ session, loading ] = useSession();
  const router = useRouter();

  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [clientList, setClientList] = useState(clientsData);
  const { handleChange, handleSubmit, handleGetEdit, client, editClient, resetForm } = useForms(handleAdd, editHandler);
  const { addClients, updateClient, deleteClient } = action(session, client)
  const admin = true;

  const url = 'http://localhost:5000';

  const API = axios.create({baseURL: 'http://localhost:5000'})

  const fetchData = async () => {
    const clientApi = `${url}/api/members`;
    const result = await axios.get(clientApi);
    setClientList(result.data);
  }

  useEffect(() => {
    if(!session){
      router.replace('/')
    }
    fetchData();
  }, []);

 

  // API.interceptors.request.use((req) => {
  //   if(session.accessToken){
  //     req.headers.Authorization = `Bearer ${session.accessToken}`;
  //   }

  //   return req;
  // })

  function handleAdd(){
    addClients(client)
  }

  function editHandler(){
    updateClient(client)
  }

  // function addClients () {
  //   API.post(`/api/members`, client)
  //     .then(res => {
  //       fetchData();
  //     })
  //     .catch(err => console.log(err));
  // }

  // function updateClient () {
  //   API.patch(`/api/members/${client._id}`, client)
  //     .then( res => {
  //       fetchData();
  //     })
  //     .catch(err => console.log(err));
  // }

  // const deleteClient = (clientId) => {
  //   API.delete(`/api/members/${clientId}`)
  //     .then(res => {
  //       fetchData();
  //     })
  //     .catch(err => console.log(err));
  // }

  const openModal = () => {
    setShowModal(true)
  }
  
  const closeModal = () => {
    resetForm();
    setShowModal(false)
  }

  const handleEdit = (client) => {
    setShowModal(true)
    handleGetEdit(client);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleSubmit()
    setShowModal(false)
    router.reload()
  }

  return (
    <>
      <div className="main-container">
        {
          !session ? (
            <div>
              <Image 
                src="/assets/images/loading2.gif"
                width={300}
                height={225}
              />
              <p>LOADING...</p>
            </div>
          ) : (
            <>
              <div className="top-container">
                <TitleSection title={"Dashboard Page"} />
                <a className="blue-btn" onClick={openModal}>
                  Add Client
                </a>
              </div>

              <AddForm
                handleFormSubmit={handleFormSubmit}
                handleChange={handleChange}
                clientName={client.name}
                clientAge={client.age}
                clientId={client.id}
                editClient={editClient}
                closeModal={closeModal}
                showModal={showModal}
              />

              <ClientList
                clientsData={clientsData}
                handleEdit={handleEdit}
                deleteClient={deleteClient}
                admin={admin}
              />
            </>
          )

        }
      </div>

    </>
  )
}


export default Dashboard
