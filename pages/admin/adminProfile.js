import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'
import Admin from './admin'

function AdminProfile() {
  return (
    <Fragment>
    <Admin>
              <div class="content">
             
               
               
                <div class="intro-y flex items-center mt-8">
                    <h2 class="text-lg font-medium mr-auto">
                        Profile Layout
                    </h2>
                </div>
                <div class="grid grid-cols-12 gap-6 mt-5">
                  
                    <div class="col-span-12 lg:col-span-4 2xl:col-span-3 flex lg:block flex-col-reverse">
                        <div class="intro-y box mt-5 lg:mt-0">
                            <div class="relative flex items-center p-5">
                                <div class="w-12 h-12 image-fit">
                                    <img alt="" class="rounded-full" src="dist/images/profile-13.jpg"/>
                                </div>
                                <div class="ml-4 mr-auto">
                                    <div class="font-medium text-base">Betchip Client</div>
                                    <div class="text-slate-500">Betchip Trader</div>
                                </div>
                                <div class="dropdown">
                                    <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-horizontal" class="w-5 h-5 text-slate-500"></i> </a>
                                    <div class="dropdown-menu w-56">
                                        <ul class="dropdown-content">
                                            <li>
                                                <h6 class="dropdown-header">
                                                    Export Options
                                                </h6>
                                            </li>
                                            <li>
                                                <hr class="dropdown-divider"/>
                                            </li>
                                            <li>
                                                <a href="" class="dropdown-item"> <i data-lucide="activity" class="w-4 h-4 mr-2"></i> English </a>
                                            </li>
                                            <li>
                                                <a href="" class="dropdown-item">
                                                    <i data-lucide="box" class="w-4 h-4 mr-2"></i> Indonesia 
                                                    <div class="text-xs text-white px-1 rounded-full bg-danger ml-auto">10</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" class="dropdown-item"> <i data-lucide="layout" class="w-4 h-4 mr-2"></i> English </a>
                                            </li>
                                            <li>
                                                <a href="" class="dropdown-item"> <i data-lucide="sidebar" class="w-4 h-4 mr-2"></i> Indonesia </a>
                                            </li>
                                            <li>
                                                <hr class="dropdown-divider"/>
                                            </li>
                                            <li>
                                                <div class="flex p-1">
                                                    <button type="button" class="btn btn-primary py-1 px-2">Settings</button>
                                                    <button type="button" class="btn btn-secondary py-1 px-2 ml-auto">View Profile</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                                <a class="flex items-center text-primary font-medium" href=""> <i data-lucide="activity" class="w-4 h-4 mr-2"></i> Personal Information </a>
                                <a class="flex items-center mt-5" href=""> <i data-lucide="box" class="w-4 h-4 mr-2"></i> Account Settings </a>
                                <a class="flex items-center mt-5" href=""> <i data-lucide="lock" class="w-4 h-4 mr-2"></i> Change Password </a>
                                <a class="flex items-center mt-5" href=""> <i data-lucide="settings" class="w-4 h-4 mr-2"></i> User Settings </a>
                            </div>
                            <div class="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                                <a class="flex items-center" href=""> <i data-lucide="activity" class="w-4 h-4 mr-2"></i> Email Settings </a>
                                <a class="flex items-center mt-5" href=""> <i data-lucide="box" class="w-4 h-4 mr-2"></i> Saved Credit Cards </a>
                                <a class="flex items-center mt-5" href=""> <i data-lucide="lock" class="w-4 h-4 mr-2"></i> Social Networks </a>
                                <a class="flex items-center mt-5" href=""> <i data-lucide="settings" class="w-4 h-4 mr-2"></i> Tax Information </a>
                            </div>
                            <div class="p-5 border-t border-slate-200/60 dark:border-darkmode-400 flex">
                                <button type="button" class="btn btn-primary py-1 px-2">New Group</button>
                                <button type="button" class="btn btn-outline-secondary py-1 px-2 ml-auto">New Quick Link</button>
                            </div>
                        </div>
                        <div class="intro-y box p-5 bg-primary text-white mt-5">
                            <div class="flex items-center">
                                <div class="font-medium text-lg">Important Update</div>
                                <div class="text-xs bg-white dark:bg-primary dark:text-white text-slate-700 px-1 rounded-md ml-auto">New</div>
                            </div>
                            <div class="mt-4">Betchip EXCHANGE update requires a min of Level 2 to access P2P Terminal</div>
                            <div class="font-medium flex mt-5">
                                <button type="button" class="btn py-1 px-2 border-white text-white dark:text-slate-300 dark:bg-darkmode-400 dark:border-darkmode-400">Take Action</button>
                                <button type="button" class="btn py-1 px-2 border-transparent text-white dark:border-transparent ml-auto">Dismiss</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-span-12 lg:col-span-8 2xl:col-span-9">
                        <div class="grid grid-cols-12 gap-6">
                           
                         
                            
                         
                            <div class="intro-y box col-span-12 2xl:col-span-6">
                                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                                    <h2 class="font-medium text-base mr-auto">
                                        Verification Level
                                    </h2>
                                    <div class="dropdown ml-auto">
                                        <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-horizontal" class="w-5 h-5 text-slate-500"></i> </a>
                                        <div class="dropdown-menu w-40">
                                            <ul class="dropdown-content">
                                                <li>
                                                    <a href="" class="dropdown-item"> <i data-lucide="edit-2" class="w-4 h-4 mr-2"></i> New Chat </a>
                                                </li>
                                                <li>
                                                    <a href="" class="dropdown-item"> <i data-lucide="trash" class="w-4 h-4 mr-2"></i> Delete </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5">
                                    <ul class="nav nav-boxed-tabs justify-center flex-col sm:flex-row" role="tablist">
                                        <li id="top-products-laravel-tab" class="nav-item" role="presentation">
                                            <a href="javascript:;" class="nav-link text-center w-full sm:w-20 mb-2 sm:mb-0 sm:mx-2 py-2 px-0 active" data-tw-target="#top-products-laravel" aria-controls="top-products-laravel" aria-selected="true" role="tab" > <i data-lucide="box" class="block w-6 h-6 mb-2 mx-auto"></i> Level 1 </a>
                                        </li>
                                        <li id="top-products-symfony-tab" class="nav-item" role="presentation">
                                            <a href="javascript:;" class="nav-link text-center w-full sm:w-20 mb-2 sm:mb-0 sm:mx-2 py-2 px-0" data-tw-target="#top-products-symfony" aria-selected="false" role="tab" > <i data-lucide="inbox" class="block w-6 h-6 mb-2 mx-auto"></i> Level 2 </a>
                                        </li>
                                        <li id="top-products-bootstrap-tab" class="nav-item" role="presentation">
                                            <a href="javascript:;" class="nav-link text-center w-full sm:w-20 mb-2 sm:mb-0 sm:mx-2 py-2 px-0" data-tw-target="#top-products-bootstrap" aria-selected="false" role="tab" > <i data-lucide="activity" class="block w-6 h-6 mb-2 mx-auto"></i> Level 3 </a>
                                        </li>
                                    </ul>
                                    <div class="tab-content mt-8">
                                        <div id="top-products-laravel" class="tab-pane active" role="tabpanel" aria-labelledby="top-products-laravel-tab">
                                            <div class="flex flex-col sm:flex-row items-center">
                                                <div class="mr-auto">
                                                    <a href="" class="font-medium">Activity Rate</a> 
                                                    <div class="text-slate-500 mt-1">% of Account activity in 1 week</div>
                                                </div>
                                                <div class="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                                                    <div class="bg-success/20 text-success rounded px-2 mr-5">+20%</div>
                                                    <div class="progress h-1 mt-2 sm:w-40">
                                                        <div class="progress-bar w-1/2 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col sm:flex-row items-center mt-5">
                                                <div class="mr-auto">
                                                    <a href="" class="font-medium">Transactions Rate</a> 
                                                    <div class="text-slate-500 mt-1">% Rate Of Account Transactions in a week</div>
                                                </div>
                                                <div class="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                                                    <div class="bg-success/20 text-success rounded px-2 mr-5">+55%</div>
                                                    <div class="progress h-1 mt-2 sm:w-40">
                                                        <div class="progress-bar w-2/3 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col sm:flex-row items-center mt-5">
                                                <div class="mr-auto">
                                                    <a href="" class="font-medium">Rewards</a> 
                                                    <div class="text-slate-500 mt-1">Weekly Rewards from Account Activity</div>
                                                </div>
                                                <div class="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                                                    <div class="bg-success/20 text-success rounded px-2 mr-5">+40%</div>
                                                    <div class="progress h-1 mt-2 sm:w-40">
                                                        <div class="progress-bar w-3/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                            <div class="intro-y box col-span-12 2xl:col-span-6">
                                <div class="flex items-center px-5 py-5 sm:py-0 border-b border-slate-200/60 dark:border-darkmode-400">
                                    <h2 class="font-medium text-base mr-auto">
                                         Account Satististics
                                    </h2>
                                    <div class="dropdown ml-auto sm:hidden">
                                        <a class="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="more-horizontal" class="w-5 h-5 text-slate-500"></i> </a>
                                        <div class="nav nav-tabs dropdown-menu w-40" role="tablist">
                                            <ul class="dropdown-content">
                                                <li> <a id="work-in-progress-mobile-new-tab" href="javascript:;" data-tw-toggle="tab" data-tw-target="#work-in-progress-new" class="dropdown-item" role="tab" aria-controls="work-in-progress-new" aria-selected="true">New</a> </li>
                                                <li> <a id="work-in-progress-mobile-last-week-tab" href="javascript:;" data-tw-toggle="tab" data-tw-target="#work-in-progress-last-week" class="dropdown-item" role="tab" aria-selected="false">Last Week</a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul class="nav nav-link-tabs w-auto ml-auto hidden sm:flex" role="tablist" >
                                        <li id="work-in-progress-new-tab" class="nav-item" role="presentation"> <a href="javascript:;" class="nav-link py-5 active" data-tw-target="#work-in-progress-new" aria-controls="work-in-progress-new" aria-selected="true" role="tab" > New </a> </li>
                                        <li id="work-in-progress-last-week-tab" class="nav-item" role="presentation"> <a href="javascript:;" class="nav-link py-5" data-tw-target="#work-in-progress-last-week" aria-selected="false" role="tab" > Last Week </a> </li>
                                    </ul>
                                </div>
                                <div class="p-5">
                                    <div class="tab-content">
                                        <div id="work-in-progress-new" class="tab-pane active" role="tabpanel" aria-labelledby="work-in-progress-new-tab">
                                            <div>
                                                <div class="flex">
                                                    <div class="mr-auto">Crypto Assets</div>
                                                    <div>20%</div>
                                                </div>
                                                <div class="progress h-1 mt-2">
                                                    <div class="progress-bar w-1/2 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="mt-5">
                                                <div class="flex">
                                                    <div class="mr-auto">NFT Assets</div>
                                                    <div>2 / 20</div>
                                                </div>
                                                <div class="progress h-1 mt-2">
                                                    <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="mt-5">
                                                <div class="flex">
                                                    <div class="mr-auto">P2P Transactions</div>
                                                    <div>42</div>
                                                </div>
                                                <div class="progress h-1 mt-2">
                                                    <div class="progress-bar w-3/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div class="mt-5">
                                                <div class="flex">
                                                    <div class="mr-auto">Rewards </div>
                                                    <div>70%</div>
                                                </div>
                                                <div class="progress h-1 mt-2">
                                                    <div class="progress-bar w-4/5 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <a href="" class="btn btn-secondary block w-40 mx-auto mt-5">View More Details</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                           
                           
                           
                            
                        </div>
                    </div>
                </div>
            </div>
    </Admin>
    </Fragment>
  )
}

export default AdminProfile