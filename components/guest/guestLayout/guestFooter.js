import React, { Fragment } from 'react'
import Image from 'next/image'

function GuestFooter() {
  return (
    <Fragment>
           
            <div class="intro-y box px-5 pt-5 mt-5">
                <div class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
                    <div class="flex flex-1 px-5 items-center justify-center lg:justify-start">
                        <div class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                            <img alt="" class="rounded-full" src="dist/images/profile-3.jpg"/>
                            <div class="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-primary rounded-full p-2"> <i class="w-4 h-4 text-white" data-lucide="camera"></i> </div>
                        </div>
                        <div class="ml-5">
                            <div class="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">Betchip</div>
                            <div class="text-slate-500">Betchip</div>
                        </div>
                    </div>
                    <div class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
                        <div class="font-medium text-center lg:text-left lg:mt-3">Contact Details</div>
                        <div class="flex flex-col justify-center items-center lg:items-start mt-4">
                            <div class="truncate sm:whitespace-normal flex items-center"> <i data-lucide="mail" class="w-4 h-4 mr-2"></i> epp@betchip.com </div>
                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <i data-lucide="instagram" class="w-4 h-4 mr-2"></i> betchip</div>
                            <div class="truncate sm:whitespace-normal flex items-center mt-3"> <i data-lucide="twitter" class="w-4 h-4 mr-2"></i> betchip </div>
                        </div>
                    </div>
                    <div class="mt-6 lg:mt-0 flex-1 px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
                        <div class="font-medium text-center lg:text-left lg:mt-5">Sales Growth</div>
                        <div class="flex items-center justify-center lg:justify-start mt-2">
                            <div class="mr-2 w-20 flex"> USP: <span class="ml-3 font-medium text-success">+23%</span> </div>
                            <div class="w-3/4">
                                <div class="h-[55px]">
                                    <canvas class="simple-line-chart-1 -mr-5"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center lg:justify-start">
                            <div class="mr-2 w-20 flex"> STP: <span class="ml-3 font-medium text-danger">-2%</span> </div>
                            <div class="w-3/4">
                                <div class="h-[55px]">
                                    <canvas class="simple-line-chart-2 -mr-5"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-col sm:flex-row justify-center lg:justify-start text-center"  >
                    <div class="font-medium text-center lg:text-center lg:mt-3">Copyright : BETCHIP 2022</div>
                </div>
            </div>
            
    </Fragment>
  )
}

export default GuestFooter