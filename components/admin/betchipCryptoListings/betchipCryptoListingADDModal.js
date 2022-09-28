import React, { Fragment } from 'react'

const BetchipCryptoListingADDModal = () => {
  return (
    <Fragment>
         <div id="BetchipCryptoListingADDModal" class="modal" data-tw-backdrop="static" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                 <div class="modal-content">
                    <a data-tw-dismiss="modal" href="javascript:;"> <i data-lucide="x" class="w-8 h-8 text-slate-400"></i> </a>
                         <div class="modal-body px-5 py-10">
                            <div class="text-center">
                                <div class="mb-5">I will not close if you click outside me. Don't even try to press escape key.</div>
                                 <button type="button" data-tw-dismiss="modal" class="btn btn-primary w-24">Ok</button>
                                 </div>
                             </div>
                         </div>
                 </div>
         </div>
    </Fragment>
  )
}

export default BetchipCryptoListingADDModal