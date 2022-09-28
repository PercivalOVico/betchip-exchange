import React, { Fragment } from 'react'

const BetchipAdvertNotifcationHeader = () => {
  return (
    <Fragment>
     <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
                <h2 class="text-lg font-medium mr-auto">
                   BETCHIP NOTIFICATIONS
                </h2>
                <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
                    <button class="btn btn-primary shadow-md mr-2">Add Advert {"OR"} Notification</button>
                    <div class="dropdown ml-auto sm:ml-0">
                        <button class="dropdown-toggle btn px-2 box" aria-expanded="false" data-tw-toggle="dropdown">
                            <span class="w-5 h-5 flex items-center justify-center"> <i class="w-4 h-4" data-lucide="plus"></i> </span>
                        </button>
                        <div class="dropdown-menu w-40">
                            <ul class="dropdown-content">
                                <li>
                                    <a href="" class="dropdown-item"> <i data-lucide="share-2" class="w-4 h-4 mr-2"></i> Share Post </a>
                                </li>
                                <li>
                                    <a href="" class="dropdown-item"> <i data-lucide="download" class="w-4 h-4 mr-2"></i> Download Post </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
  )
}

export default BetchipAdvertNotifcationHeader