import React, { Fragment, useContext, useEffect, useState  } from 'react'
import Admin from '../../admin';
import { useRouter } from 'next/router';
import client from '../../../../lib/client';
import TriangleLoader from '../../../../components/admin/adminCommon/loaders/triangleLoader';
import Alert from '../../../../components/admin/adminCommon/alert';
import NextLink from 'next/link';
import Link from 'next/link';
import { urlFor, urlForThumbnail } from '../../../../lib/image';
import Image from 'next/image';
import { Store } from '../../../../lib/Store';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import BetchipAnnouncement from '../betchipAnnouncement';

const Announcement = ( props ) => {
   const router = useRouter();
  const { slug } = props;

    const {
    state: { board },
    dispatch,
  } = useContext(Store);
  
  const { enqueueSnackbar } = useSnackbar();

  const [state, setState] = useState({
    announcement: null,
    loading: true,
    error: '',
  });

  const { announcement, loading, error } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const announcement = await client.fetch(
          `*[_type == "announcement" && slug.current == $slug][0]`,
          { slug } 
        );
        setState({ ...state, announcement, loading: false });
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
  }, []);


    const addToBoardHandler = async () => {
    const existItem = board.boardItems.find((x) => x._id === announcement._id);
   
    const { data } = await axios.get(`/api/announcements/${announcement._id}`);
  
    dispatch({
      type: 'BOARD_ADD_ITEM',
      payload: {
        _key: announcement._id,
        announcement_headline: announcement.announcement_headline,
        announcement_title: announcement.announcement_title,
        slug: announcement.slug.current,
        announcement_content: announcement.announcement_content,
        announcement_image: urlForThumbnail(announcement.announcement_image),
        
      },
    });
    enqueueSnackbar(`${announcement.announcement_headline} added to the board`, {
      variant: 'success',
    });
    router.push('/admin/betchipAnnouncement/betchipAnnouncementBoard');
  };


  return (
    <Fragment>
       <BetchipAnnouncement announcement_title={announcement?.announcement_title}>
             {loading ? (
     <TriangleLoader />
       ) : error ? (
        <Alert error={error} />
          ) : (
   
    <div class="intro-y">
      <div class="inbox__item inbox__item--active inline-block sm:block text-slate-600 dark:text-slate-500 bg-slate-100 dark:bg-darkmode-400/70 border-b border-slate-200/60 dark:border-darkmode-400">
         <div class="flex px-5 py-3">
           <NextLink href="/admin/betchipAnnouncement/betchipAnnouncementListing" passHref>
             <Link>
               <button class="btn btn-pending w-32 mr-2 mb-2" type="button" >back to Announcement Listing</button>
             </Link>
           </NextLink>
                    <div class="w-72 flex-none flex items-center mr-5">
                        <input class="form-check-input flex-none" type="checkbox" checked />
                            <a href="javascript:;" class="w-5 h-5 flex-none ml-4 flex items-center justify-center text-slate-400"> <i class="w-4 h-4" data-lucide="star"></i> </a>
                            <a href="javascript:;" class="w-5 h-5 flex-none ml-2 flex items-center justify-center text-slate-400"> <i class="w-4 h-4" data-lucide="bookmark"></i> </a>
                            <div class="w-6 h-6 flex-none image-fit relative ml-5">
                            <Image alt={announcement.announcement_title} class="rounded-full" src={urlFor(announcement.announcement_image)} layout="responsive" width={120} height={120} />
                        </div>
                     <div class="inbox__item--sender truncate ml-3">{announcement.announcement_headline}</div>
                 </div>
              <div class="w-64 sm:w-auto truncate"> <span class="inbox__item--highlight">{announcement.announcement_title}</span> {announcement.announcement_content} </div>
            <div class="inbox__item--time whitespace-nowrap ml-auto pl-10">01:10 PM</div>
             <button class="btn btn-pending w-32 mr-2 mb-2" type="button" onClick={addToBoardHandler} >post to board</button>
        </div>
       </div>
     </div>
       

         ) }
       </BetchipAnnouncement>
    </Fragment>
  )
}

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}

export default Announcement