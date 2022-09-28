import React, { Fragment } from 'react'
import { FaWallet } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
//import { client } from '../../lib/sanity'


const AdminSendCryptoModal = ({setAction, twTokens, selectedToken, walletAddress}) => {
     const [amount, setAmount] = useState('')
     const [recipient, setRecipient] = useState('')
     const [imageUrl, setImageUrl] = useState(null)
  
    return (
    <Fragment>
    <div>
         <div  class="text-4xl text-primary font-medium leading-none" value={amount} onChange={e => setAmount(e.target.value)} > <input class="px-4 py-3 rounded-full bg-danger text-white mr-1" placeholder="AMOUNT" type="number"/> <span class="px-4 py-3 rounded-full bg-danger text-white mr-1">ETH</span></div>
        <br/>
        <div class="alert alert-warning alert-dismissible show flex items-center mb-2" style={{ color: amount  && '#0a0b0d' }}  role="alert"> <i data-lucide="alert-circle" class="w-6 h-6 mr-2"></i> Amount is a required field <button type="button" class="btn-close" data-tw-dismiss="alert" aria-label="Close"> <i data-lucide="x" class="w-4 h-4"></i> </button> </div>
    </div>
    
         <div class="form-inline" value={recipient} onChange={e => setRecipient(e.target.value)}> <label for="horizontal-form-1" class="form-label sm:w-20">To :</label> <input id="horizontal-form-1" type="text" class="form-control" placeholder="Recipient Crypto Address"/> </div>
         <div class="form-inline mt-5"> <label for="horizontal-form-2" class="form-label sm:w-20">Pay With</label> <img src={imageUrl}  /><select data-placeholder="Select Cryptocurrency To Buy" class="tom-select w-full">
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
         <br/>
         <div class="flex gap-6"> <h5 class="text-lg text-left text-danger font-medium leading-none mt-3">ETH</h5>
          <h5 class="text-lg text-center text-danger font-medium leading-none mt-3">Balance is </h5>
           <h5 class="text-lg text-right text-success font-medium leading-none mt-3">4</h5>
           </div>
          <br/>
        
    </Fragment>
  )
}

export default AdminSendCryptoModal