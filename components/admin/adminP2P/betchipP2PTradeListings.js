import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import { coins } from '../../../static/coins'
import ClientCoin from '../../client/clientWallet/clientCoin'
import client from '../../../lib/client'
import { p2pAD } from '../../../studio/schemas/p2pAD'
import TriangleLoader from '../../common/loaders/triangleLoader'
import Alert from '../adminCommon/alert'
import P2PTradeModal from '../../../pages/p2pAD/[slug]'
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Link from 'next/link'
import BetchipP2PTradingOrders from './betchipP2PTradingOrders'

const BetchipP2PTradeListings = ({ p2pAD }) => {
   const router = useRouter();
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
                    <Alert error={error} />
                    ) : (
                 <div class="col-span-12 mt-6">
                                <div class="intro-y block sm:flex items-center h-10">
                                    <h2 class="text-lg font-medium truncate mr-5">
                                       P2P TRADES
                                    </h2>
                                    <div class="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                        <button class="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" class="hidden sm:block w-4 h-4 mr-2"></i>  Generate Report </button>
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
            
                                           <BetchipP2PTradingOrders p2pAD={p2pAD}/>
                                          
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

export default BetchipP2PTradeListings