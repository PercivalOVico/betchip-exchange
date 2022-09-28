import React, { Fragment } from 'react'
import NextLink from 'next/link';
import { urlForThumbnail } from '../../../lib/image';
import Image from 'next/image';
import { urlFor } from '../../../lib/image';

const BetchipAnnouncementListings = ({announcement}) => {
  return (
    <Fragment>
   <NextLink href={`/admin/betchipAnnouncement/announcement/${announcement.slug.current}`} passHref>
    <div class="intro-y">
      <div class="inbox__item inbox__item--active inline-block sm:block text-slate-600 dark:text-slate-500 bg-slate-100 dark:bg-darkmode-400/70 border-b border-slate-200/60 dark:border-darkmode-400">
         <div class="flex px-5 py-3">
                    <div class="w-72 flex-none flex items-center mr-5">
                        <input class="form-check-input flex-none" type="checkbox" checked />
                            <a href="javascript:;" class="w-5 h-5 flex-none ml-4 flex items-center justify-center text-slate-400"> <i class="w-4 h-4" data-lucide="star"></i> </a>
                            <a href="javascript:;" class="w-5 h-5 flex-none ml-2 flex items-center justify-center text-slate-400"> <i class="w-4 h-4" data-lucide="bookmark"></i> </a>
                            <div class="w-6 h-6 flex-none image-fit relative ml-5">
                            <Image alt="" class="rounded-full" src={urlFor(announcement.announcement_image)} layout="responsive" width={120} height={120} />
                        </div>
                     <div class="inbox__item--sender truncate ml-3">{announcement.announcement_headline}</div>
                 </div>
              <div class="w-64 sm:w-auto truncate"> <span class="inbox__item--highlight">{announcement.announcement_title}</span> {announcement.announcement_content} </div>
            <div class="inbox__item--time whitespace-nowrap ml-auto pl-10">01:10 PM</div>
             <button class="btn btn-outline-warning align-center">Details</button>
        </div>
       </div>
     </div>
    </NextLink> 
    </Fragment>
  )
}

export default BetchipAnnouncementListings