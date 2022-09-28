import React, { Fragment,  useContext, useEffect, useState  } from 'react'
import Router from 'next/router'
import { useRouter } from 'next/router';
import { Store } from '../../../lib/Store';


const BetchipAnnouncementNav = () => {

    const router = useRouter();
    const { state } = useContext(Store);
    const { board } = state;
  return (
    <Fragment>
          <div class="col-span-12 lg:col-span-3 2xl:col-span-2">
                        <h2 class="intro-y text-lg font-medium mr-auto mt-2">
                            All Announcement
                        </h2>
                       
                        <div class="intro-y box bg-primary p-5 mt-6">
                            <button type="button" class="btn text-slate-600 dark:text-slate-300 w-full bg-white dark:bg-darkmode-300 dark:border-darkmode-300 mt-1"> <i class="w-4 h-4 mr-2" data-lucide="edit-3"></i> Generate Report  </button>
                            <div class="border-t border-white/10 dark:border-darkmode-400 mt-6 pt-6 text-white">
                                <a onClick={() => {router.push('./betchipAnnouncementListing');}}class="flex items-center px-3 py-2 rounded-md bg-white/10 dark:bg-darkmode-700 font-medium"> <i class="w-4 h-4 mr-2" data-lucide="mail"></i> Announcement List </a>
                                <a onClick={() => {router.push('./betchipAnnouncementBoard');}} class="flex items-center px-3 py-2 mt-2 rounded-md"> <i class="w-4 h-4 mr-2" data-lucide="star"></i> Announcement Board {board.boardItems.length > 0 ? ( <button class="btn btn-warning mr-1 mb-2"> <i data-lucide="share-2" class="w-2 h-2"></i>{board.boardItems.length} </button> ) : (
                      'Empty'
                    )}</a>
                                <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md"> <i class="w-4 h-4 mr-2" data-lucide="inbox"></i> Starred Announcement </a>
                                <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md"> <i class="w-4 h-4 mr-2" data-lucide="send"></i> Pending Announcement </a>
                                <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md"> <i class="w-4 h-4 mr-2" data-lucide="trash"></i> Announcement Logs </a>
                            </div>
                            <div class="border-t border-white/10 dark:border-darkmode-400 mt-4 pt-4 text-white"/>
                        </div>
        
                    </div>
    </Fragment>
  )
}

export default BetchipAnnouncementNav

