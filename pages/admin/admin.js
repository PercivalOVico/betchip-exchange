import React from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import ClientSideNavBarMobile from '../../components/client/clientLayout/clientSideNavBarMobile'
import ClientSideNavBarPC from '../../components/client/clientLayout/clientSideNavBarPC'
import JsAssets from '../../components/client/jsAssets'
import AdminDashboard from './adminDashboard'

//Dependencies
import axios from 'axios'
import { useState, useContext } from 'react'
import ClientHeader from '../../components/client/clientLayout/clientHeader'
import AdminSideNavBarMobile from '../../components/admin/adminLayout/adminSideNavBarMobile'
import AdminSideNavBarPC from '../../components/admin/adminLayout/adminSideNavBarPC'
import AdminHeader from '../../components/admin/adminLayout/adminHeader'
import AdminFooter from '../../components/admin/adminLayout/adminFooter'
import Darkmodeswiter from '../../components/admin/adminLayout/darkModeSwitcher'


const Admin = ({ children,  twTokens, sanityTokens, walletAddress }) =>  {
   const { address, connectWallet } = useWeb3()

  return (
     <div class="dark">
        <div class="py-5">
          <AdminSideNavBarMobile />
           <div class="flex">
         <AdminSideNavBarPC />
            <div class="content">
         <AdminHeader
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

export default Admin