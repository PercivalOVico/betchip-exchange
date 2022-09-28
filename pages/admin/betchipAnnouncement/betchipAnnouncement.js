import React, { Fragment, useEffect, useState } from 'react'
import BetchipAdvertNotifcationHeader from '../../../components/admin/adminNotifications/betchipAdvertNotifcationHeader'
import BetchipAdvertNotificationPreview from '../../../components/admin/adminNotifications/betchipAdvertNotificationPreview'
import BetchipAdvertNotificationsADDModal from '../../../components/admin/adminNotifications/betchipAdvertNotificationsADDModal'
import ClientHeader from '../../../components/client/clientLayout/clientHeader'
import Admin from '../admin'
import client from '../../../lib/client'

import TriangleLoader from '../../../components/admin/adminCommon/loaders/triangleLoader'
import Alert from '../../../components/admin/adminCommon/alert'
import { useRouter } from 'next/router'
import axios from 'axios';

import BetchipAnnouncementNavHeader from '../../../components/admin/adminNotifications/betchipAnnouncementNavHeader'
import BetchipAnnouncementContentTop from '../../../components/admin/adminNotifications/betchipAnnouncementContentTop'
import BetchipAnnouncementContentBottom from '../../../components/admin/adminNotifications/betchipAnnouncementContentBottom'
import BetchipAnnouncementNav from '../../../components/admin/adminNotifications/betchipAnnouncementNav'





function BetchipAnnouncement({children} ) {

 


  return (
   
    <Admin >
         
            <div class="content">
              <BetchipAdvertNotifcationHeader />          
              <BetchipAdvertNotificationPreview />
               <div class="grid grid-cols-12 gap-6 mt-8">
                  <BetchipAnnouncementNav />
                   <div class="col-span-12 lg:col-span-9 2xl:col-span-10">
                     <BetchipAnnouncementNavHeader />
                     <div class="intro-y inbox box mt-5">
                       <BetchipAnnouncementContentTop />
                         {children}
                      <BetchipAnnouncementContentBottom />
                     
                     </div>

                  </div>
              </div>
            </div>

            
    </Admin>
 
  )
}


export default BetchipAnnouncement