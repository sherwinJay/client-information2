import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';
import Dashboard from '../components/Dashboard';


export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.SERVER_SITE}/api/members`);
  const data = await res.json();

  return {
    props: { clientsData: data }
  }
}

const DashboardPage = ({  clientsData }) => {

  const [ session, loading ] = useSession();
  const router = useRouter();
  const admin = true;

  useEffect(() => {
    if(!session){
      router.replace('/signin')
    }
  }, []);

  return (
    <>
      <div className="main-container">
        {
          !session ? (
            <Loading />
          ) : (
            <Dashboard 
              session={session} 
              admin={admin} 
              clientsData={clientsData} 
            />
          )
        }
      </div>

    </>
  )
}

export default DashboardPage;