import React from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import ClientSideNavBarMobile from '../../components/client/clientLayout/clientSideNavBarMobile'
import ClientSideNavBarPC from '../../components/client/clientLayout/clientSideNavBarPC'
import JsAssets from '../../components/client/jsAssets'
import Darkmodeswiter from '../../components/darkmodeswiter'
import ClientDashboardd from './clientDashboardd'

//Dependencies
import axios from 'axios'
import { useState, useContext } from 'react'
import ClientHeader from '../../components/client/clientLayout/clientHeader'


const Client = ({ children,  twTokens, sanityTokens, walletAddress }) =>  {
   const { address, connectWallet } = useWeb3()

  return (
     <div class="dark">
        <div class="py-5">
          <ClientSideNavBarMobile />
           <div class="flex">
         <ClientSideNavBarPC />
            <div class="content">
         <ClientHeader 
          twTokens={twTokens}
          sanityTokens={sanityTokens}
          walletAddress={address} />
          {children}
          </div>
          </div>
         <Darkmodeswiter />
         <JsAssets />
         
        </div>
    </div>
    
  )
}

export default Client