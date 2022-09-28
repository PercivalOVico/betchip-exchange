import React, { Fragment } from 'react'
import BetchipAdvertNotificationsADDModal from './betchipAdvertNotificationsADDModal'

const BetchipAnnouncementNavHeader = () => {
  return (
    <Fragment>
       <div class="intro-y flex flex-col-reverse sm:flex-row items-center">
                            <div class="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0">
                                <i class="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-slate-500" data-lucide="search"></i> 
                                <input type="text" class="form-control w-full sm:w-64 box px-10" placeholder="Search Notifications"/>
                                <div class="inbox-filter dropdown absolute inset-y-0 mr-3 right-0 flex items-center" data-tw-placement="bottom-start">
                                    <i class="dropdown-toggle w-4 h-4 cursor-pointer text-slate-500" role="button" aria-expanded="false" data-tw-toggle="dropdown" data-lucide="chevron-down"></i> 
                                    <div class="inbox-filter__dropdown-menu dropdown-menu pt-2">
                                        <div class="dropdown-content">
                                            <div class="grid grid-cols-12 gap-4 gap-y-3 p-3">
                                                <div class="col-span-6">
                                                    <label for="input-filter-1" class="form-label text-xs">From</label>
                                                    <input id="input-filter-1" type="text" class="form-control flex-1" placeholder="example@gmail.com"/>
                                                </div>
                                                <div class="col-span-6">
                                                    <label for="input-filter-2" class="form-label text-xs">To</label>
                                                    <input id="input-filter-2" type="text" class="form-control flex-1" placeholder="example@gmail.com"/>
                                                </div>
                                                <div class="col-span-6">
                                                    <label for="input-filter-3" class="form-label text-xs">Subject</label>
                                                    <input id="input-filter-3" type="text" class="form-control flex-1" placeholder="Important Meeting"/>
                                                </div>
                                                <div class="col-span-6">
                                                    <label for="input-filter-4" class="form-label text-xs">Has the Words</label>
                                                    <input id="input-filter-4" type="text" class="form-control flex-1" placeholder="Job, Work, Documentation"/>
                                                </div>
                                                <div class="col-span-6">
                                                    <label for="input-filter-5" class="form-label text-xs">Doesn't Have</label>
                                                    <input id="input-filter-5" type="text" class="form-control flex-1" placeholder="Job, Work, Documentation"/>
                                                </div>
                                                <div class="col-span-6">
                                                    <label for="input-filter-6" class="form-label text-xs">Size</label>
                                                    <select id="input-filter-6" class="form-select flex-1">
                                                        <option>10</option>
                                                        <option>25</option>
                                                        <option>35</option>
                                                        <option>50</option>
                                                    </select>
                                                </div>
                                                <div class="col-span-12 flex items-center mt-3">
                                                    <button class="btn btn-secondary w-32 ml-auto">Create Filter</button>
                                                    <button class="btn btn-primary w-32 ml-2">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-auto flex">
                            <button class="btn btn-primary shadow-md mr-2" type='button' data-tw-toggle="modal" data-tw-target="#BetchipAdvertNotificationsADDModal" >Add Betchip Announcement <BetchipAdvertNotificationsADDModal /></button>
                                <div class="dropdown">
                                    <button class="dropdown-toggle btn px-2 box" aria-expanded="false" data-tw-toggle="dropdown">
                                        <span class="w-5 h-5 flex items-center justify-center"> <i class="w-4 h-4" data-lucide="plus"></i> </span>
                                    </button>
                                    <div class="dropdown-menu w-40">
                                        <ul class="dropdown-content">
                                            <li>
                                                <a href="" class="dropdown-item"> <i data-lucide="user" class="w-4 h-4 mr-2"></i> Contacts </a>
                                            </li>
                                            <li>
                                                <a href="" class="dropdown-item"> <i data-lucide="settings" class="w-4 h-4 mr-2"></i> Settings </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
    </Fragment>
  )
}

export default BetchipAnnouncementNavHeader