import Form from '../components/Form/Form';
import TitleSection from '../components/PageTitle';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import ClientList from '../components/ClientList';
import FilterClient from '../components/FilterClients';



export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.SERVER_SITE}/api/members`);
  const data = await res.json();

  return {
    props: { clientsData: data }
  }
}

export default function Home({ clientsData }) {

  const [ session ] = useSession();
  const [gender, setGender] = useState('all');
  const [age, setAge] = useState('all');

  const filterGender = (gender) => {
    setGender(gender)
  }

  const filterAge = (age) => {
    setAge(age)
  }

  const admin = false;

  return (
    <>
      <div className="main-container">
        <div className="top-container">
          {/* <TitleSection title={"Home Page"} /> */}
          <div className="home-action-btn">
            <FilterClient 
              age={age}
              gender={gender}
              filterAge={filterAge}
              filterGender={filterGender}
            />
          </div>
        </div>
        <ClientList
          clientsData={clientsData}
          admin={admin}
          gender={gender}
          age={age}
        />
      </div>
    </>
  )
}
