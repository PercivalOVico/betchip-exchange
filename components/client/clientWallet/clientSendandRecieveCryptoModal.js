import React, { Fragment, useEffect, useState } from 'react'
import ClientSendCryptoModal from './clientSendCryptoModal'
import Image from 'next/image'
import ClientRecieveCryptoModal from './clientRecieveCryptoModal'


const ClientSendandRecieveCryptoModal  = ({ twTokens, sanityTokens, walletAddress }) =>  {
      const [action, setAction] = useState('')
      const [selectedToken, setSelectedToken] = useState(sanityTokens[0])
  


      
    return (
    <Fragment>
      
          <div id="clientSendandRecieveCryptoModal" class="modal" data-tw-backdrop="static" tabindex="-1" aria-hidden="true"> <div class="modal-dialog"> 
          <div class="modal-content"><a data-tw-dismiss="modal" href="javascript:;"> <i data-lucide="x" class="w-8 h-8 text-slate-400"></i> </a> 
          <div class="modal-body px-5 py-10"> <div class="text-center"> 
            
             <div class="intro-y box mt-5">
                           
                            <div id="boxed-tab" class="p-5">
                                <div class="preview">
                                    <ul class="nav nav-boxed-tabs" role="tablist">
                                        <li id="example-3-tab" class="nav-item flex-1" role="presentation">
                                            <button class="nav-link w-full py-2 active" data-tw-toggle="pill" data-tw-target="#example-tab-3" type="button" role="tab" aria-controls="example-tab-3" aria-selected="true" > SEND </button>
                                        </li>
                                        <li id="example-4-tab" class="nav-item flex-1" role="presentation">
                                            <button class="nav-link w-full py-2" data-tw-toggle="pill" data-tw-target="#example-tab-4" type="button" role="tab" aria-controls="example-tab-4" aria-selected="false" > RECIEVE </button>
                                        </li>
                                    </ul>
                                    <div class="tab-content mt-5">
                                        <div id="example-tab-3" class="tab-pane leading-relaxed active" role="tabpanel" aria-labelledby="example-3-tab">
    <div class="mt-3"> 
     
   <ClientSendCryptoModal 
          twTokens={twTokens}
          selectedToken={sanityTokens}
          walletAddress={walletAddress} />

  <button type="button" data-tw-dismiss="modal" class="btn btn-primary w-24">SEND</button> 
 </div> 
                                        </div>
                                        <div id="example-tab-4" class="tab-pane leading-relaxed" role="tabpanel" aria-labelledby="example-4-tab"> 

                                       
                                        <ClientRecieveCryptoModal
                                        twTokens={twTokens}
                                        selectedToken={sanityTokens}
                                        walletAddress={walletAddress} />

                                        <button type="button" data-tw-dismiss="modal" class="btn btn-primary w-24">RECIEVE</button> 
                                        </div>
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

export default ClientSendandRecieveCryptoModal