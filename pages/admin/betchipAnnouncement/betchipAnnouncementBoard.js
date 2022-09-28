import React, { Fragment, useContext, useEffect, useState} from 'react'
import { Store } from '../../../lib/Store';
import BetchipAnnouncement from './betchipAnnouncement';
import NextLink from 'next/link';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import Link from 'next/link';
import { urlFor } from '../../../lib/image';


function  BetchipAnnouncementBoard () {
     

     const router = useRouter();

     const {
       state: { 
        board: {boardItems} 
      },
      dispatch,
     } = useContext(Store); 
  
     const { enqueueSnackbar } = useSnackbar();

     const updateCartHandler = async (item) => {
    const { data } = await axios.get(`/api/announcement/${item._id}`);
    
    dispatch({
      type: 'BOARD_ADD_ITEM',
      payload: {
        _key: item._key,
        announcement_headline: item.announcement_headline,
        slug: item.slug,
        announcement_content: item.announcement_content,
        announcement_image: item.announcement_image,
        announcement_icon: item.announcement_icon,
    
      },
    });
    enqueueSnackbar(`${item.announcement_headline} updated in the cart`, {
      variant: 'success',
    });
  };

    const removeItemHandler = (item) => {
     dispatch({ type: 'BOARD_REMOVE_ITEM', payload: item });
  };
    
  
  return (
    <Fragment>
    <BetchipAnnouncement title="AnnouncementBoard">

      {boardItems.length === 0 ? (
        
         <div class="alert alert-danger-soft show flex items-center mb-2" role="alert"> <i data-lucide="alert-octagon" class="w-6 h-6 mr-2"></i> 
          ALERT !!!!   Announcement Board is empty.{' '}
          <NextLink href="/admin/betchipAnnouncement/betchipAnnouncementListing" passHref>
          <button class="btn btn-outline-success align-center">Add an Announcement To Board</button>
             
            </NextLink>
           </div>
          
           
            
         
      ) : (
     <div class="intro-y">
      <div class="inbox__item inbox__item--active inline-block sm:block text-slate-600 dark:text-slate-500 bg-slate-100 dark:bg-darkmode-400/70 border-b border-slate-200/60 dark:border-darkmode-400">
       {boardItems.map((item) => (
         <div class="flex px-5 py-3" key={item._key}>
                    <div class="w-72 flex-none flex items-center mr-5">
                        <input class="form-check-input flex-none" type="checkbox" checked />
                            <a href="javascript:;" class="w-5 h-5 flex-none ml-4 flex items-center justify-center text-slate-400"> <i class="w-4 h-4" data-lucide="star"></i> </a>
                            <a href="javascript:;" class="w-5 h-5 flex-none ml-2 flex items-center justify-center text-slate-400"> <i class="w-4 h-4" data-lucide="bookmark"></i> </a>
                             <NextLink href={`/announcement/${item.slug}`} passHref>
                             <Link>
                              <div class="w-6 h-6 flex-none image-fit relative ml-5">
                              <Image alt="" class="rounded-full" src={item.announcement_image} layout="responsive" width={50} height={50} alt={item.announcement_headline} />
                             </div>
                             </Link>
                            </NextLink>

                       <NextLink href={`/announcement/${item.slug}`} passHref>
                       <Link>
                           <div class="inbox__item--sender truncate ml-3">{item.announcement_headline}</div>
                       </Link>
                     </NextLink> 
                 </div>
              <div class="w-64 sm:w-auto truncate"> <span class="inbox__item--highlight">{item.announcement_title}</span> {item.announcement_content} </div>
            <div class="inbox__item--time whitespace-nowrap ml-auto pl-10">01:10 PM</div>
            <button class="btn btn-outline-danger align-center" onClick={() => removeItemHandler(item)}>Delete</button>
            <button class="btn btn-outline-warning align-center">Details</button>
        </div>
         ))}
       </div>
     </div>

      )}
    
    </BetchipAnnouncement>
    </Fragment>
  )
}
export default dynamic(() => Promise.resolve(BetchipAnnouncementBoard), { ssr: false });

