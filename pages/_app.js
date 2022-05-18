import Layout from '../components/Layout'
import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import { useRouter } from 'next/router';
import LoginLayout from '../components/LoginLayout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //   router.events.on('routeChangeStart', () => {
  //     nprogress.start();
  //   });

  //   router.events.on('routeChangeComplete', () => {
  //     nprogress.done();
  //   });
  //   return () => {
  //     nprogress.done();
  //   };
  // }, []);

  return (
    <Provider session={pageProps.session}>
      { router.route === '/signin' ? 
      (
        <LoginLayout>
           <Component {...pageProps} />
        </LoginLayout>    
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )
      }
    </Provider>
  )
}

export default MyApp
