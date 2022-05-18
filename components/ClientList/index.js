import Image from 'next/image';
import { useState } from 'react';
import { modalBoxContainer, modalBox, actionBtnContainer, admin, clientBoxWrapper, clientBox, editClientBtn, deleteClientBtn } from "./styles"
import { css, cx } from '@emotion/css'


const ClientList = ({ clientsData, handleEdit, deleteClient, toggleMessage, admin, gender, age }) => {  

  const [showModal, setShowModal] = useState(false);
  const [clientId, setClientId] = useState('');

  const confirmDelete = (clientId) => {
    setShowModal(true);
    setClientId(clientId)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleDelete = (clientId) => {
    deleteClient(clientId);
    setClientId('');
    closeModal();
    toggleMessage('Client deleted')
  }

  return (
    <>
      <div className={clientBoxWrapper}>
        {
          clientsData.filter(client => {
            if(gender === 'all'){
              return client
            }else{
              return client.gender === gender
            }
          }).filter(client => {
            const legalAge = 18;
            switch (age) {
              case "all":
                return client
                break;
              case "legal":
                return client.age >= legalAge
                break;
              case "minor":
                return client.age < legalAge
                break;
            }
          }).map((client) => {
            return(
              <div className={clientBox} key={client._id}>
                <p>{client.name}</p>
                <p>{client.age}</p>
                <p>{client.gender}</p>
                {
                  admin ? (
                  <div className={actionBtnContainer}>
                    <a className={editClientBtn} onClick={() => handleEdit(client)}>
                      <Image src="/assets/images/edit.png" width={15} height={15} />
                    </a>
                    <a className={deleteClientBtn} onClick={() => confirmDelete(client._id)}>
                      <Image src="/assets/images/delete.png" width={15} height={15} />
                    </a>
                  </div>
                  ) : (
                    // return empty fragment
                    <></>
                  )
                }
              </div>
            )
          })
        }
      </div>
      <div className={modalBoxContainer({ showModal })}>
        <div className={modalBox}>
          <h4>Delete this client?</h4>
          <div>
            <a className="blue-btn" onClick={() => handleDelete(clientId)}>Yes</a>
            <a className="red-btn" onClick={closeModal}>No</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientList;
