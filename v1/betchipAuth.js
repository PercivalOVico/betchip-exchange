import React, { Fragment } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import Image from 'next/image'
import JsAssets from '../../components/client/jsAssets'
import Header from '../../components/common/header'


//Dependencies
import axios from 'axios'
import { useState, useContext } from 'react'



const BetchipAuth = ({ children }) =>   {

  const { address, connectWallet } = useWeb3()
   
  return (
    <Fragment>
       <Header />
     <div class="dark">
     <div class="login">
            {children}
         <JsAssets />
     </div>
     </div>
   
    </Fragment>
  )
}

export default BetchipAuth