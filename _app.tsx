
/* Importações gerais */

import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SessionProvider, useSession } from "next-auth/react";
import '../globals.css';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import VLibras from '@djpfs/react-vlibras';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (

    <SessionProvider session={session}>
        <Navbar/> 
        {isClient && <VLibras forceOnload={true} />}   
          <Component {...pageProps} />
          <Footer/>
    </SessionProvider>

  );
}

export default MyApp;
