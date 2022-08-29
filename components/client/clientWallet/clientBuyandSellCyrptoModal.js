import React, { Fragment } from 'react'

function ClientBuyandSellCryptoModal() {
  return (
    <Fragment>
      
          <div id="clientBuyCryptoModal" class="modal" data-tw-backdrop="static" tabindex="-1" aria-hidden="true"> <div class="modal-dialog"> 
          <div class="modal-content"><a data-tw-dismiss="modal" href="javascript:;"> <i data-lucide="x" class="w-8 h-8 text-slate-400"></i> </a> 
          <div class="modal-body px-5 py-10"> <div class="text-center"> 
            <div class="mt-3"> <label>SWAP  CRYPTO</label>
     <div class="form-inline mt-5"> <label for="horizontal-form-2" class="form-label sm:w-20">Cryptocurrency</label><select data-placeholder="Select Cryptocurrency To Buy" class="tom-select w-full">
             <optgroup label="CRYPTO CURRENCIES">
                 <option value="1">Bitcoin</option>
                 <option value="2">USDT</option>
                 <option value="3">ETHERUM</option>
                 <option value="4">LITECOIN</option>
                 <option value="5">DOGE</option>
             </optgroup>
             <optgroup label="TOKENS">
                 <option value="6">PUNDIX</option>
                 <option value="7">ARROW</option>
                 <option value="8">APE</option>
                 <option value="9">XEM</option>
                 <option value="10">YEF</option>
             </optgroup>
         </select> </div>
          
     <div class="form-inline mt-5"> <label for="horizontal-form-2" class="form-label sm:w-20">Cryptocurrency</label><select data-placeholder="Select Cryptocurrency To Buy" class="tom-select w-full">
             <optgroup label="CRYPTO CURRENCIES">
                 <option value="1">Bitcoin</option>
                 <option value="2">USDT</option>
                 <option value="3">ETHERUM</option>
                 <option value="4">LITECOIN</option>
                 <option value="5">DOGE</option>
             </optgroup>
             <optgroup label="TOKENS">
                 <option value="6">PUNDIX</option>
                 <option value="7">ARROW</option>
                 <option value="8">APE</option>
                 <option value="9">XEM</option>
                 <option value="10">YEF</option>
             </optgroup>
         </select> </div>
 <div class="form-inline mt-5"> <label for="horizontal-form-2" class="form-label sm:w-20">Amount</label> <input id="horizontal-form-2" type="text" class="form-control" placeholder="Amount To Buy"/> </div>
 </div> 
 
          <button type="button" data-tw-dismiss="modal" class="btn btn-primary w-24">BUY</button> 
          </div> 
          </div> 
          </div> 
          </div>
           </div> 
    </Fragment>
  )
}

export default ClientBuyandSellCryptoModal