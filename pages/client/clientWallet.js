import React, { Fragment } from 'react'
import ClientBuyCryptoModal from '../../components/client/clientWallet/clientRecieveCryptoModal'
import Client from './client'
import Image from 'next/image'
import { coins } from '../../static/coins'
import { Import } from 'lucide'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Modal from 'react-modal'



const ClientWallet= ({ twTokens, sanityTokens, walletAddress, connectWallet }) => {
    const router = useRouter()

     console.log(sanityTokens) 
      console.log(twTokens) 
       console.log( walletAddress) 
  return (
    <Fragment>
     <Client>
         <div class="content">
             
            
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12 2xl:col-span-9">
                        <div class="grid grid-cols-12 gap-6">
                            
                            <div class="col-span-12 2xl:col-span-9 mt-4">
                                <div class="intro-y flex items-center h-10">
                                    <h2 class="text-lg font-medium truncate mr-5">
                                        Wallet Overview
                                    </h2>
                                    <a href="" class="ml-auto text-primary truncate">Show More</a> 
                                </div>
                                <div class="report-box-2 intro-y mt-5">
                                    <div class="box grid grid-cols-12">
                                        <div class="col-span-12 lg:col-span-4 px-8 py-12 flex flex-col justify-center">
                                            <i data-lucide="pie-chart" class="w-10 h-10 text-pending"></i> 
                                            <div class="justify-start flex items-center text-slate-600 dark:text-slate-300 mt-12"> My Total Assets <i data-lucide="alert-circle" class="tooltip w-4 h-4 ml-1.5" title="Total value of your sales: $158.409.416"></i> </div>
                                            <div class="flex items-center justify-start mt-4">
                                                <div class="relative text-2xl font-medium pl-3 ml-0.5"> <span class="absolute text-xl font-medium top-0 left-0 -ml-0.5">$</span> 1,413,102.02 </div>
                                                <a class="text-slate-500 ml-4" href=""> <i data-lucide="refresh-ccw" class="w-4 h-4"></i> </a>
                                            </div>
                                            <div class="mt-4 text-slate-500 text-xs">Last updated 1 hour ago</div>
                                            <button class="btn btn-outline-secondary relative justify-start rounded-full mt-12">
                                                Download Reports 
                                                <span class="w-8 h-8 absolute flex justify-center items-center bg-primary text-white rounded-full right-0 top-0 bottom-0 my-auto ml-auto mr-0.5"> <i data-lucide="arrow-right" class="w-4 h-4"></i> </span>
                                            </button>
                                        </div>
                                        <div class="col-span-12 lg:col-span-8 p-8 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-darkmode-300 border-dashed">
                                        <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-6">
                                            <ul class=" nav nav-pills w-60 border border-slate-300 dark:border-darkmode-300 border-dashed rounded-md mx-auto p-1 mb-8 " role="tablist" >
                                                <li id="weekly-report-tab" class="nav-item flex-1" role="presentation">
                                                    <button class="nav-link w-full py-1.5 px-2 active" data-tw-toggle="pill" data-tw-target="#weekly-report" type="button" role="tab" aria-controls="weekly-report" aria-selected="true" > Deposit Crypto </button>
                                                </li>
                                                <li id="monthly-report-tab" class="nav-item flex-1" role="presentation">
                                                    <button class="nav-link w-full py-1.5 px-2" data-tw-toggle="pill" data-tw-target="#monthly-report" type="button" role="tab" aria-selected="false" > Withdraw Crypto </button>
                                                </li>
                                                  <li id="monthly-report-tab" class="nav-item flex-1" role="presentation">
                                                    <button class="nav-link w-full py-1.5 px-2" data-tw-toggle="pill" data-tw-target="#monthly-report" type="button" role="tab" aria-selected="false" > Buy Crypto </button>
                                                </li>
                                            </ul>
                                             <ul class=" nav nav-pills w-60 border border-slate-300 dark:border-darkmode-300 border-dashed rounded-md mx-auto p-1 mb-8 " role="tablist" >
                                                <li id="weekly-report-tab" class="nav-item flex-1" role="presentation">
                                                    <button class="nav-link w-full py-1.5 px-2 active" data-tw-toggle="pill" data-tw-target="#weekly-report" type="button" role="tab" aria-controls="weekly-report" aria-selected="true" > Deposit Fiat </button>
                                                </li>
                                                <li id="monthly-report-tab" class="nav-item flex-1" role="presentation">
                                                    <button class="nav-link w-full py-1.5 px-2" data-tw-toggle="pill" data-tw-target="#monthly-report" type="button" role="tab" aria-selected="false" > Withdraw Fiat </button>
                                                </li>
                                                  <li id="monthly-report-tab" class="nav-item flex-1" role="presentation">
                                                    <button class="nav-link w-full py-1.5 px-2" data-tw-toggle="pill" data-tw-target="#monthly-report" type="button" role="tab" aria-selected="false" > Buy Fiat </button>
                                                </li>
                                            </ul>
                                        </div>
                                            <div class="tab-content px-5 pb-5">
                                                <div class="tab-pane active grid grid-cols-12 gap-y-8 gap-x-10" id="weekly-report" role="tabpanel" aria-labelledby="weekly-report-tab">
                                                    <div class="col-span-6 sm:col-span-6 md:col-span-4">
                                                        <div class="text-slate-500">No: Crypto Assests</div>
                                                        <div class="mt-1.5 flex items-center">
                                                            <div class="text-base">10</div>
                                                           
                                                        </div>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                                                        <div class="text-slate-500">No: NFT Assests</div>
                                                        <div class="mt-1.5 flex items-center">
                                                            <div class="text-base">4</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                                                        <div class="text-slate-500">No: Fiat Assests</div>
                                                        <div class="mt-1.5 flex items-center">
                                                            <div class="text-base">2</div>
                                                        </div>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                                                        <div class="text-slate-500">Crypto Investment</div>
                                                        <div class="mt-1.5 flex items-center">
                                                            <div class="text-base">$670</div>
                                                             <div class="text-danger flex text-xs font-medium tooltip cursor-pointer ml-2" title="2% Lower than last month"> 2% <i data-lucide="chevron-down" class="w-4 h-4 ml-0.5"></i> </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                                                        <div class="text-slate-500">NFT Investment</div>
                                                        <div class="mt-1.5 flex items-center">
                                                            <div class="text-base">$184</div>
                                                            <div class="text-success flex text-xs font-medium tooltip cursor-pointer ml-2" title="52% Higher than last month"> 52% <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5"></i> </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                                                        <div class="text-slate-500">Fiat Investment</div>
                                                        <div class="mt-1.5 flex items-center">
                                                            <div class="text-base">$1200</div>
                                                             <div class="text-danger flex text-xs font-medium tooltip cursor-pointer ml-2" title="2% Lower than last month"> 2% <i data-lucide="chevron-down" class="w-4 h-4 ml-0.5"></i> </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                                                        <div class="text-slate-500">Crypto Investment Change</div>
                                                        <div class="mt-1.5 flex items-center">
                                                            <div class="text-base">-$76</div>
                                                             <div class="text-danger flex text-xs font-medium tooltip cursor-pointer ml-2" title="2% Lower than last month"> 8% <i data-lucide="chevron-down" class="w-4 h-4 ml-0.5"></i> </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                                                        <div class="text-slate-500">Change NFT Investment</div>
                                                        <div class="mt-1.5 flex items-center">
                                                            <div class="text-base">2</div>
                                                             <div class="text-success flex text-xs font-medium tooltip cursor-pointer ml-2" title="2% Lower than last month"> 14% <i data-lucide="chevron-down" class="w-4 h-4 ml-0.5"></i> </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-span-12 sm:col-span-6 md:col-span-4">
                                                        <div class="text-slate-500">Change Fiat Assets</div>
                                                        <div class="mt-1.5 flex items-center">
                                                            <div class="text-base">$1200</div>
                                                            <div class="text-success flex text-xs font-medium tooltip cursor-pointer ml-2" title="49% Higher than last month"> 1% <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5"></i> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        

                 
                <div class="col-span-12 mt-6">
                 <h2 class="intro-y text-lg font-medium  mt-10">
                    Assests
                 </h2>
                    <div class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
                        <button class="btn btn-primary shadow-md mr-2" type='button' data-tw-toggle="modal" data-tw-target="#clientBuyCryptoModal" >Add Crypto <ClientBuyCryptoModal /></button>
                        <div class="dropdown">
                            <button class="dropdown-toggle btn px-2 box"  aria-expanded="false" data-tw-toggle="dropdown">
                                <span class="w-5 h-5 flex items-center justify-center"> <i class="w-4 h-4" data-lucide="plus"></i> </span>
                            </button>
                            
                            <div class="dropdown-menu w-40">
                                <ul class="dropdown-content">
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="printer" class="w-4 h-4 mr-2"></i> Print </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="file-text" class="w-4 h-4 mr-2"></i> Export to Excel </a>
                                    </li>
                                    <li>
                                        <a href="" class="dropdown-item"> <i data-lucide="file-text" class="w-4 h-4 mr-2"></i> Export to PDF </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="hidden md:block mx-auto text-slate-500">Showing 1 to 10 of 150 entries</div>
                        <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
                            <div class="w-56 relative text-slate-500">
                                <input type="text" class="form-control w-56 box pr-10" placeholder="Search..."/>
                                <i class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" data-lucide="search"></i> 
                            </div>
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
                                          {coins.map(coin => (
                            <tbody key={coin.name} >
                                            <tr class="intro-x">
                                                <td class="w-40">
                                                    <div class="flex">
                                                        <div class="w-10 h-10 image-fit zoom-in">
                                                            <Image class="tooltip rounded-full" src={coin.logo} alt={coin.name} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="" class="font-medium whitespace-nowrap">{coin.name}</a> 
                                                    <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">{coin.sign}</div>
                                                </td>
                                                <td>
                                                    <a href="" class="font-medium whitespace-nowrap"> {'$'} {coin.balanceUsd}</a> 
                                                    <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">{coin.balanceCoin} {coin.sign}</div>
                                                </td>
                                                
                                                
                                                <td class="w-40"> 
                                                     <div class="text-center"> {'$'}  {coin.priceUsd}</div>
                                                    <div class="flex items-center justify-center text-success" style={{ color: coin.change < 0 ? '#f0616d' : '#26ad75' }} > <i data-lucide="check-square" class="w-4 h-4 mr-2"></i> {coin.change > 0 && '+'}
                                                  {coin.change}%</div>
                                                </td>
                                                <td class="text-center"> {coin.allocation}{'%'} </td>
                                                <td class="table-report__action w-56">
                                                    <div class="flex justify-center items-center">
                                                              <a class="flex items-center text-success" href=""> <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> BUY </a>
                                                        <a class="flex items-center text-danger" href=""> <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> SELL</a>
                                                        <a class="flex items-center text-warning" href=""> <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> P2P </a>
                                                    </div>
                                                </td>
                                            </tr>
                                          
                                        </tbody>
              ))}
                                    </table>
                                </div>
                   
                    <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
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
              
                <div id="delete-confirmation-modal" class="modal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="p-5 text-center">
                                    <i data-lucide="x-circle" class="w-16 h-16 text-danger mx-auto mt-3"></i> 
                                    <div class="text-3xl mt-5">Are you sure?</div>
                                    <div class="text-slate-500 mt-2">
                                        Do you really want to delete these records? 
                                        <br/>
                                        This process cannot be undone.
                                    </div>
                                </div>
                                <div class="px-5 pb-8 text-center">
                                    <button type="button" data-tw-dismiss="modal" class="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                                    <button type="button" class="btn btn-danger w-24">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
             

                        </div>
                    </div>
                 
                </div>
            </div>
     </Client>
    </Fragment>
  )
}

export default ClientWallet