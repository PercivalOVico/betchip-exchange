import React, { Fragment, useContext, useEffect, useState} from 'react'
import { Store } from '../../../lib/Store';
import BetchipAdvertNotificationDetailsModal from './betchipAdvertNotificationDetailsModal'
import NextLink from 'next/link';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import Link from 'next/link';

const BetchipAdvertNotificationPreview = () => {

      const router = useRouter();

     const {
       state: { 
        board: {boardItems} 
      },
      dispatch,
     } = useContext(Store); 


  return (
    <Fragment>

     {boardItems.length === 0 ? (
        
         <div class="alert alert-danger-soft show flex items-center mb-2" role="alert"> <i data-lucide="alert-octagon" class="w-6 h-6 mr-2"></i> 
          ALERT !!!!   Announcement Board is empty.{' '}
          <NextLink href="/admin/betchipAnnouncement/betchipAnnouncementListing" passHref>
          <button class="btn btn-outline-success align-center">Add an Announcement To Board</button>
             
            </NextLink>
           </div>
          
           
            
         
      ) : (
         <div class="intro-y grid-cols-12 gap-6 mt-5">
                       
                        <div id="responsive-slider" class="p-5">
                            <div class="preview">
                                <div class="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit">
                                    <div class="responsive-mode">
                                   
                                    {boardItems.map((item) => (
                                         <div class="intro-y col-span-12 md:col-span-6 box">
                    <div class="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit">
                       <Image class="rounded-full" src={item.announcement_image} layout="responsive" width={5} height={5} alt={item.announcement_headline} />
                        <div class="absolute w-full flex items-center px-5 pt-6 z-10">
                            <div class="w-10 h-10 flex-none image-fit">
                               
                                 <Image class="rounded-full" src={item.announcement_image} layout="responsive" width={2} height={2} alt={item.announcement_headline} />
                            </div>
                            <div class="ml-3 text-white mr-auto">
                                <a href="" class="font-medium">Betchip jhbvjhghjhgjhgv</a> 
                                <div class="text-xs mt-0.5">19 seconds ago</div>
                            </div>
                            <div class="dropdown ml-3">
                                <a href="javascript:;" class="bg-white/20 dropdown-toggle w-8 h-8 flex items-center justify-center rounded-full" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-vertical" class="w-4 h-4 text-white"></i> </a>
                                <div class="dropdown-menu w-40">
                                    <ul class="dropdown-content">
                                        <li>
                                            <a href="" class="dropdown-item"> <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i> Edit Post </a>
                                        </li>
                                        <li>
                                            <a href="" class="dropdown-item"> <i data-lucide="trash" class="w-4 h-4 mr-2"></i> Delete Post </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="absolute bottom-0 text-white px-5 pb-6 z-10"> <span class="bg-white/20 px-2 py-1 rounded">Betchip&amp; Exchange</span> <a href="" class="block font-medium text-xl mt-3">p2p Exchange, buy CryptoCurrencies</a> </div>
                    </div>
                   
                </div>
                ))}
                <BetchipAdvertNotificationDetailsModal  />
               
                                       
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
        </div>    



        )}
    </Fragment>
  )
}


export default dynamic(() => Promise.resolve(BetchipAdvertNotificationPreview), { ssr: false });