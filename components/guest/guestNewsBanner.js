import React, { Fragment } from 'react'

function GuestNewsBanner() {
  return (
    <Fragment>
    <div class="col-span-12 2xl:col-span-3">
                    <div class="2xl:border-l -mb-10 pb-10">
                        <div class="2xl:pl-6 grid grid-cols-12 gap-x-6 2xl:gap-x-0 gap-y-6">
         <div class="col-span-12 md:col-span-12 xl:col-span-12 mt-3 2xl:mt-8">
                                <div class="intro-x flex items-center h-10">
                                    <h2 class="text-lg font-medium truncate mr-auto">
                                        Crptocurrency & Blockchain NEWS
                                    </h2>
                                    <button data-carousel="important-notes" data-target="prev" class="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"> <i data-lucide="chevron-left" class="w-4 h-4"></i> </button>
                                    <button data-carousel="important-notes" data-target="next" class="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"> <i data-lucide="chevron-right" class="w-4 h-4"></i> </button>
                                </div>
                                <div class="mt-5 intro-x">
                                    <div class="box zoom-in">
                                        <div class="tiny-slider" id="important-notes">
                                            <div class="p-5">
                                                <div class="text-base font-medium truncate">new tokens</div>
                                                <div class="text-slate-400 mt-1">20 Hours ago</div>
                                                <div class="text-slate-500 text-justify mt-1"> bitcoin update</div>
                                                <div class="font-medium flex mt-5">
                                                    <button type="button" class="btn btn-secondary py-1 px-2">View Notes</button>
                                                    <button type="button" class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                                </div>
                                            </div>
                                            <div class="p-5">
                                                <div class="text-base font-medium truncate">Betchip</div>
                                                <div class="text-slate-400 mt-1">20 Hours ago</div>
                                                <div class="text-slate-500 text-justify mt-1">betchip tokens.</div>
                                                <div class="font-medium flex mt-5">
                                                    <button type="button" class="btn btn-secondary py-1 px-2">View Notes</button>
                                                    <button type="button" class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                                </div>
                                            </div>
                                            <div class="p-5">
                                                <div class="text-base font-medium truncate">Betchip </div>
                                                <div class="text-slate-400 mt-1">20 Hours ago</div>
                                                <div class="text-slate-500 text-justify mt-1">New Listings</div>
                                                <div class="font-medium flex mt-5">
                                                    <button type="button" class="btn btn-secondary py-1 px-2">View Notes</button>
                                                    <button type="button" class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
    </Fragment>
  )
}

export default GuestNewsBanner