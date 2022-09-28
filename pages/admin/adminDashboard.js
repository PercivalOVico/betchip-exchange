import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Admin from './admin'
import Image from 'next/image'
import ClientPortfolio from '../../components/client/clientWallet/clientPortfolio'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'
import { useWeb3 } from '@3rdweb/hooks'
import ClientHeader from '../../components/client/clientLayout/clientHeader'
import ClientSendandRecieveCryptoModal from '../../components/client/clientWallet/clientSendandRecieveCryptoModal'
import ClientBuyandSellCryptoModal from '../../components/client/clientWallet/clientBuyandSellCyrptoModal'
import AdminPortfolio from '../../components/admin/adminWallet/adminPortfolio'
import BetchipP2PTradeListings from '../../components/admin/adminP2P/betchipP2PTradeListings'

Modal.setAppElement('#__next')
ClientSendandRecieveCryptoModal

const AdminDashboard = ({walletAddress}) => {
  
  const { address, connectWallet } = useWeb3()
  const router = useRouter()
  const [twTokens, setTwTokens] = useState([])
  const [sanityTokens, setSanityTokens] = useState([])

  useEffect(() => {
    const getCoins = async () => {
      try {
        const coins = await fetch(
          "https://juievua3.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%20'coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%2C%0A%7D",
        )
        const tempSanityTokens = await coins.json()

        setSanityTokens(tempSanityTokens.result)
      } catch (error) {
        console.error(error)
      }
    }

  
  }, [])

  useEffect(() => {
    if (sanityTokens) {
      const sdk = new ThirdwebSDK(
        new ethers.Wallet(
          process.env.NEXT_PUBLIC_METAMASK_KEY,
          ethers.getDefaultProvider('https://rinkeby.infura.io/v3/'),
        ),
      )

      sanityTokens.map(tokenItem => {
        const currentToken = sdk.getTokenModule(tokenItem.contractAddress)

        setTwTokens(prevState => [...prevState, currentToken])
      })
    }
  }, [sanityTokens])
    // console.log(sanityTokens) 
 console.log(twTokens)
  // console.log(address)
  return (
    <Fragment>
         <Admin >
            <div class="content">
                <div class="grid grid-cols-12 gap-6">
                    <div class="col-span-12 2xl:col-span-9">
                        <div class="grid grid-cols-12 gap-6">
                           
                            <div class="col-span-12 mt-8">
                                <div class="intro-y flex items-center h-10">
                                    <h2 class="text-lg font-medium truncate mr-5">
                                        General Report..
                                    </h2>
                                        <button class="btn btn-primary shadow-md mr-2" type='button' data-tw-toggle="modal" data-tw-target="#clientSendandRecieveCryptoModal" >SEND {'&'} RECIEVE <ClientSendandRecieveCryptoModal twTokens={twTokens}  sanityTokens={sanityTokens}  walletAddress={walletAddress} /></button>
                                         <button class="btn btn-primary shadow-md mr-2" type='button' data-tw-toggle="modal" data-tw-target="#clientBuyAndSellCryptoModal" >BUY {'&'} SELL <ClientBuyandSellCryptoModal twTokens={twTokens}  sanityTokens={sanityTokens}  walletAddress={walletAddress}/></button>
                                    <a href="" class="ml-auto flex items-center text-primary"> <i data-lucide="refresh-ccw" class="w-4 h-4 mr-3"></i> Reload Data </a>
                                </div>
                                <div class="grid grid-cols-12 gap-6 mt-5">
                                    <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div class="report-box zoom-in">
                                            <div class="box p-5">
                                                <div class="flex">
                                                    <i data-lucide="shopping-cart" class="report-box__icon text-primary"></i> 
                                                    <div class="ml-auto">
                                                        <div class="report-box__indicator bg-success tooltip cursor-pointer" title="33% Higher than last month"> 33% <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5"></i> </div>
                                                    </div>
                                                </div>
                                                <div class="text-3xl font-medium leading-8 mt-6"> {'$'}
                                                 </div>
                                                <div class="text-base text-slate-500 mt-1">Exchange Volume </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div class="report-box zoom-in">
                                            <div class="box p-5">
                                                <div class="flex">
                                                    <i data-lucide="credit-card" class="report-box__icon text-pending"></i> 
                                                    <div class="ml-auto">
                                                        <div class="report-box__indicator bg-danger tooltip cursor-pointer" title="2% Lower than last month"> 2% <i data-lucide="chevron-down" class="w-4 h-4 ml-0.5"></i> </div>
                                                    </div>
                                                </div>
                                                <div class="text-3xl font-medium leading-8 mt-6">13</div>
                                                <div class="text-base text-slate-500 mt-1">Number Of Subcribers</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div class="report-box zoom-in">
                                            <div class="box p-5">
                                                <div class="flex">
                                                    <i data-lucide="monitor" class="report-box__icon text-warning"></i> 
                                                    <div class="ml-auto">
                                                        <div class="report-box__indicator bg-success tooltip cursor-pointer" title="12% Higher than last month"> 12% <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5"></i> </div>
                                                    </div>
                                                </div>
                                                <div class="text-3xl font-medium leading-8 mt-6">6</div>
                                                <div class="text-base text-slate-500 mt-1">Pending P2P Trades</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div class="report-box zoom-in">
                                            <div class="box p-5">
                                                <div class="flex">
                                                    <i data-lucide="user" class="report-box__icon text-success"></i> 
                                                    <div class="ml-auto">
                                                        <div class="report-box__indicator bg-success tooltip cursor-pointer" title="22% Higher than last month"> 22% <i data-lucide="chevron-up" class="w-4 h-4 ml-0.5"></i> </div>
                                                    </div>
                                                </div>
                                                <div class="text-3xl font-medium leading-8 mt-6">23</div>
                                                <div class="text-base text-slate-500 mt-1">Completed P2P Trades</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                         
                     
                       
                       
                      
                            <AdminPortfolio
                             twTokens={twTokens}
                            sanityTokens={sanityTokens}
                             walletAddress={address} />

                               <BetchipP2PTradeListings />
                            
                        </div>
                    </div>
                   
                </div>
                </div>
          
         
      
    </Admin>
    </Fragment>
  )
}

export default AdminDashboard


