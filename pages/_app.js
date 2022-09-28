import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import React, {Fragment, useState, useEffect } from 'react';
import { StoreProvider } from '../lib/Store';
import { SnackbarProvider } from 'notistack';


const supportedChainIds = [4, 80001]
const connectors = {
  injected: {},
}


function MyApp({ Component, pageProps }) {

   useEffect(()=>{
        import("../dist/output.css");
        import("../dist/js/app");
        import("../dist/js/app.js");
        import("../src/css/app.css");
        import("../dist/css/app.css");

       
      
       
},[])


  return(

   <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}>
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <StoreProvider>
       <Component {...pageProps} />
      </StoreProvider>
      </SnackbarProvider>
    </ThirdwebWeb3Provider>

  )
}

export default MyApp
