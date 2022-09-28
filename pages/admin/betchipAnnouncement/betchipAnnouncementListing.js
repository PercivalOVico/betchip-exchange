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

import BetchipAnnouncement from './betchipAnnouncement'
import BetchipAnnouncementListings from '../../../components/admin/adminNotifications/betchipAnnouncementListings'

const BetchipAnnouncementListing = () => {

    const router = useRouter();
    const [state, setState] = useState({
    announcements: [],
    loading: true,
    error: '',
  });
     const { announcements, loading, error } = state;
      useEffect(() => {
    const fetchData = async () => {
      try {
        const announcements = await client.fetch(
          `*[_type == "announcement"]` );
        setState({ announcements, loading: false });
      } catch (err) {
        setState({ error: err.message, loading: false });
      }
    };
    fetchData();
  }, []);

  return (
    <Fragment>
    <BetchipAnnouncement>
     {loading ? (
     <TriangleLoader />
       ) : error ? (
        <Alert error={error} />
          ) : (
            <>
       {announcements.map(announcement => (
                            <div class="overflow-x-auto sm:overflow-x-visible" key={announcement.slug} >
                              
                                <BetchipAnnouncementListings announcement={announcement} />
                               
                            </div>
                             ))}
                             </>
                 ) }
    </BetchipAnnouncement>
    </Fragment>
   
  )}

export default BetchipAnnouncementListing