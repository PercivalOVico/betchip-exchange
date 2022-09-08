import React, { Fragment, useContext, useEffect, useState  } from 'react'
import Image from 'next/image';
import { urlForThumbnail } from '../../../lib/image';
import NextLink from 'next/link';
import TriangleLoader from '../../common/loaders/triangleLoader';
import Alert from '../../common/alert';

const ClientP2PTradeCard = ({p2pAD} ) => {
   
    
  return (
       <Fragment>
        
          <div class="intro-y col-span-12 md:col-span-6">
                        <div class="box">
                            <div class="flex flex-col lg:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                                <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                                    <img component="img" alt="" class="rounded-full" image={urlForThumbnail(p2pAD.image)} />
                                    
                                </div>
                                <div class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                                    <a href="" class="font-medium">{p2pAD.name}</a> 
                                    <div class="text-slate-500 text-xs mt-0.5">John p2p guru {p2pAD.price}</div>
                                </div>
                                <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
                                    <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Facebook"> <i class="w-3 h-3 fill-current" data-lucide="facebook"></i> </a>
                                    <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Twitter"> <i class="w-3 h-3 fill-current" data-lucide="twitter"></i> </a>
                                    <a href="" class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in tooltip" title="Linked In"> <i class="w-3 h-3 fill-current" data-lucide="linkedin"></i> </a>
                                </div>
                            </div>
                            <div class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5">
                                <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
                                    <div class="flex text-slate-500 text-xs">
                                        <div class="mr-auto">Reviews</div>
                                        <div>{p2pAD.numReviews}</div>
                                    </div>
                                    <div class="progress h-1 mt-2">
                                        <div class="progress-bar w-1/4 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <button class="btn btn-primary py-1 px-2 mr-2">Trade</button>
                                <button class="btn btn-outline-secondary py-1 px-2">Message</button>
                            </div>
                        </div>
                    </div>
                 
                </Fragment>
  )
}

export default ClientP2PTradeCard