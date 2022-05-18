import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AddForm from '../Form/AddForm';
import useForms from '../Form/useForm';
import TitleSection from '../PageTitle';
import ClientList from '../ClientList';
import action from '../actions/action';
import Modal from '../Modals';
import Loading from '../Loading';
import FilterClient from '../FilterClients';

const Dashboard = ({ clientsData, admin, session }) => {

  const [showMessage, setShowMessage] = useState(false);
  const [ message, setMessage ] = useState('')
  const [showModal, setShowModal] = useState(false);

  // try to transfer this to Add Form component
  const { handleChange, handleSubmit, handleGetEdit, client, editClient, resetForm } = useForms(handleAdd, editHandler);
  const { addClients, updateClient, deleteClient } = action(session, client);

  // try to create custom function hook
  const [gender, setGender] = useState('all');
  const [age, setAge] = useState('all');

  const filterGender = (gender) => {
    setGender(gender)
  }

  const filterAge = (age) => {
    setAge(age)
  }

  // toggle message
  const toggleMessage = (message) => {
    if(!showMessage){
      setShowMessage(true)
      setMessage(message)
    }else{
      setShowMessage(false)
    }
  }

  const toggleModal = () => {
    if(!showModal){
      setShowModal(true)
    }else{
      resetForm();
      setShowModal(false)
    }
  }

  function handleAdd(){
    addClients(client)
  }

  function editHandler(){
    updateClient(client)
  }


  const handleEdit = (client) => {
    setShowModal(true)
    handleGetEdit(client);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleSubmit()
    setShowModal(false)

    // show popup message
    editClient ? toggleMessage('Client Edit Success') : toggleMessage('Client Added')

  }
  
  return (
    <>
      <div className="top-container">
        <TitleSection title={"Dashboard"} />
        <div className="action-container">
          <FilterClient 
            age={age}
            gender={gender}
            filterAge={filterAge}
            filterGender={filterGender}
          />
          <a className="blue-btn" onClick={toggleModal}>
            Add Client
          </a>
        </div>
      </div>

      <AddForm
        handleFormSubmit={handleFormSubmit}
        handleChange={handleChange}
        clientName={client.name}
        clientAge={client.age}
        clientId={client.id}
        clientGender={client.gender}
        editClient={editClient}
        toggleModal={toggleModal}
        showModal={showModal}
      />

      <ClientList
        clientsData={clientsData}
        handleEdit={handleEdit}
        deleteClient={deleteClient}
        session={session}
        toggleMessage={toggleMessage}
        showModal={showModal}
        admin={admin}
        gender={gender}
        age={age}
      />

      <Modal 
        message={message}
        toggleMessage={toggleMessage}
        showMessage={showMessage}
      />
    </> 
          
  )
}

export default Dashboard;
