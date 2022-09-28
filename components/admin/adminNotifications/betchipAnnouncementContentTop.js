import React, { Fragment } from 'react'

const BetchipAnnouncementContentTop = () => {
  return (
    <Fragment>
          <div class="p-5 flex flex-col-reverse sm:flex-row text-slate-500 border-b border-slate-200/60">
                                <div class="flex items-center mt-3 sm:mt-0 border-t sm:border-0 border-slate-200/60 pt-5 sm:pt-0 mt-5 sm:mt-0 -mx-5 sm:mx-0 px-5 sm:px-0">
                                    <input class="form-check-input" type="checkbox"/>
                                    <div class="dropdown ml-1" data-tw-placement="bottom-start">
                                        <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="chevron-down" class="w-5 h-5"></i> </a>
                                        <div class="dropdown-menu w-32">
                                            <ul class="dropdown-content">
                                                <li> <a href="" class="dropdown-item">All</a> </li>
                                                <li> <a href="" class="dropdown-item">None</a> </li>
                                                <li> <a href="" class="dropdown-item">Read</a> </li>
                                                <li> <a href="" class="dropdown-item">Unread</a> </li>
                                                <li> <a href="" class="dropdown-item">Starred</a> </li>
                                                <li> <a href="" class="dropdown-item">Unstarred</a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="javascript:;" class="w-5 h-5 ml-5 flex items-center justify-center"> <i class="w-4 h-4" data-lucide="refresh-cw"></i> </a>
                                    <a href="javascript:;" class="w-5 h-5 ml-5 flex items-center justify-center"> <i class="w-4 h-4" data-lucide="more-horizontal"></i> </a>
                                </div>
                                <div class="flex items-center sm:ml-auto">
                                    <div class="">1 - 50 of 5,238</div>
                                    <a href="javascript:;" class="w-5 h-5 ml-5 flex items-center justify-center"> <i class="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                    <a href="javascript:;" class="w-5 h-5 ml-5 flex items-center justify-center"> <i class="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                    <a href="javascript:;" class="w-5 h-5 ml-5 flex items-center justify-center"> <i class="w-4 h-4" data-lucide="settings"></i> </a>
                                </div>
                            </div>
    </Fragment>
  )
}

export default BetchipAnnouncementContentTop