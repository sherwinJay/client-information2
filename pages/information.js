import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Maintenance from "../components/Maintenance";
import Loading from '../components/Loading';

const Information = () => {

    const [ session, loading ] = useSession();
    const router = useRouter();

    useEffect(() => {

        if(!session){
          router.replace('/')
        }
    
      }, []);

    return (
        <div className="main-container">
            {
                !session ? (
                    // return blank
                    <Loading />
                ) : (
                    <Maintenance />
                )   

            }
        </div>
    )
}

export default Information
