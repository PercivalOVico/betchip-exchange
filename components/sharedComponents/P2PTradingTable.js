import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import { coins } from '../../static/coins'
import ClientCoin from '../client/clientWallet/clientCoin'
import client from '../../lib/client'
import { p2pAD } from '../../studio/schemas/p2pAD'
import TriangleLoader from '../common/loaders/triangleLoader'
import Alert from '../common/alert'

const P2PTradingTable = () => {

   const [state, setState] = useState({
    p2pADs: [],
    error: '',
    loading: true,
  });
  const { loading, error, p2pADs } = state;

   useEffect(() => {
    const fetchData = async () => {
      try {
        const p2pADs = await client.fetch(`*[_type == "p2pAD"]`);
        setState({ p2pADs, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);



  return (
           
    <Fragment>
          {loading ? (
                     <TriangleLoader />
                     ) : error ? (
                    <Alert class="alert-primary">{error}</Alert>
                    ) : (
                 <div class="col-span-12 mt-6">
                                <div class="intro-y block sm:flex items-center h-10">
                                    <h2 class="text-lg font-medium truncate mr-5">
                                       P2P TRADES
                                    </h2>
                                    <div class="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                        <button class="btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" class="hidden sm:block w-4 h-4 mr-2"></i> Export to Excel </button>
                                        <button class="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" class="hidden sm:block w-4 h-4 mr-2"></i> Export to PDF </button>
                                    </div>
                                </div>
                                <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                    <table class="table table-report sm:mt-2">
                                        <thead>
                                            <tr>
                                                <th class="whitespace-nowrap">IMAGE</th>
                                                <th class="whitespace-nowrap">ASSET</th>
                                                <th class="text-center whitespace-nowrap">BALANCE</th>
                                                <th class="text-center whitespace-nowrap">PRICE</th>
                                                <th class="text-center whitespace-nowrap">ALLOCATION</th>
                                                <th class="text-center whitespace-nowrap">ACTIONS</th>
                                            </tr>
                                        </thead>
                                          {p2pADs.map(p2pAD => (
                            <tbody key={p2pAD.slug} >
                                            <tr class="intro-x">
                                                <td class="w-40">
                                                    <div class="flex">
                                                        <div class="w-10 h-10 image-fit zoom-in">
                                                            <Image class="tooltip rounded-full" src={p2pAD.image} alt={p2pAD.name} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="" class="font-medium whitespace-nowrap">{p2pAD.name}</a> 
                                                    <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">{p2pAD.numReviews}</div>
                                                </td>
                                                <td>
                                                    <a href="" class="font-medium whitespace-nowrap"> {'$'} {p2pAD.price}</a> 
                                                    <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">{p2pAD.title} {p2pAD.name}</div>
                                                </td>
                                                
                                                
                                                <td class="w-40"> 
                                                     <div class="text-center"> {'$'}  {p2pAD.price}</div>
                                                    <div class="flex items-center justify-center text-success" style={{ color: p2pAD.change < 0 ? '#f0616d' : '#26ad75' }} > <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> {p2pAD.change > 0 && '+'}
                                                  {p2pAD.Category}%</div>
                                                </td>
                                                <td class="text-center"> {p2pAD.allocation}{'%'} </td>
                                                <td class="table-report__action w-56">
                                                    <div class="flex justify-center items-center">
                                                        
                                                        <button class="btn btn-pending w-32 mr-2 mb-2" onClick={() => { router.push('../auth/guestRegister');}}> <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> TRADE </button> 
                                                    </div>
                                                </td>
                                            </tr>
                                          
                                        </tbody>
              ))}
                                    </table>
                                </div>
                                <div class="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                                    <nav class="w-full sm:w-auto sm:mr-auto">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                            </li>
                                            <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                            <li class="page-item"> <a class="page-link" href="#">1</a> </li>
                                            <li class="page-item active"> <a class="page-link" href="#">2</a> </li>
                                            <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                                            <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <select class="w-20 form-select box mt-3 sm:mt-0">
                                        <option>10</option>
                                        <option>25</option>
                                        <option>35</option>
                                        <option>50</option>
                                    </select>
                                </div>
           </div>
   ) }
         </Fragment>
  )
  
}

export default P2PTradingTable