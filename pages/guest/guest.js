import React, { Fragment } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import Image from 'next/image'
import JsAssets from '../../components/client/jsAssets'

import GuestTopNavBarMobile from '../../components/guest/guestLayout/guestTopNavBarMobile'
import GuestTopNavBarPC from '../../components/guest/guestLayout/guestTopNavBarPC'
import GuestTopBar from '../../components/guest/guestTopBar'

//Dependencies
import axios from 'axios'
import { useState, useContext } from 'react'



const Guest = ({ children }) =>   {

  
   
  return (
    <Fragment>
    <div class="dark">
        <div class="py-5">
        <GuestTopNavBarMobile />
        <GuestTopBar />
         <div class="content">
            {children}
         </div>
         
         <JsAssets />
        </div>
    </div>
    </Fragment>
  )
}

export default Guest